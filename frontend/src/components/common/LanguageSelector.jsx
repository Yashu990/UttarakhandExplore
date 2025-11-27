import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Check, Clock } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const LanguageSelector = () => {
    const { currentLanguage, changeLanguage, availableLanguages } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    const handleLanguageChange = (langCode) => {
        changeLanguage(langCode);
        setIsOpen(false);
    };

    const currentLang = availableLanguages.find((lang) => lang.code === currentLanguage);

    return (
        <div className="relative" ref={dropdownRef}>
            {/* Globe Icon Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Select Language"
            >
                <Globe className="h-5 w-5 text-textSecondary" />
                <span className="hidden md:inline text-sm font-medium text-textSecondary">
                    {currentLang?.flag}
                </span>
            </button>

            {/* Dropdown Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute right-0 mt-2 w-64 bg-white dark:bg-gray-900 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden z-50"
                    >
                        {/* Header */}
                        <div className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">
                            <p className="text-sm font-semibold text-textPrimary">Select Language</p>
                            <p className="text-xs text-textSecondary mt-1">Choose your preferred language</p>
                        </div>

                        {/* Language List */}
                        <div className="py-2">
                            {availableLanguages.map((lang) => (
                                <button
                                    key={lang.code}
                                    onClick={() => handleLanguageChange(lang.code)}
                                    disabled={!lang.ready}
                                    className={`w-full flex items-center justify-between px-4 py-3 transition-colors ${currentLanguage === lang.code
                                            ? 'bg-primary/10 text-primary'
                                            : lang.ready
                                                ? 'hover:bg-gray-100 dark:hover:bg-gray-800 text-textPrimary'
                                                : 'opacity-50 cursor-not-allowed text-textSecondary'
                                        }`}
                                >
                                    <div className="flex items-center space-x-3">
                                        {/* Flag */}
                                        <span className="text-2xl">{lang.flag}</span>

                                        {/* Language Name */}
                                        <div className="text-left">
                                            <p className="text-sm font-medium">{lang.name}</p>
                                            {!lang.ready && (
                                                <div className="flex items-center space-x-1 mt-1">
                                                    <Clock className="h-3 w-3 text-textSecondary" />
                                                    <span className="text-xs text-textSecondary">Coming Soon</span>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    {/* Checkmark if selected */}
                                    {currentLanguage === lang.code && (
                                        <Check className="h-5 w-5 text-primary flex-shrink-0" />
                                    )}
                                </button>
                            ))}
                        </div>

                        {/* Footer Note */}
                        <div className="px-4 py-3 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
                            <p className="text-xs text-textSecondary">
                                Your language preference is saved automatically
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default LanguageSelector;
