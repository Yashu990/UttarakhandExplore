import React, { createContext, useContext, useState, useEffect } from 'react';

// Import translation files
import en from '../locales/en.json';
import hi from '../locales/hi.json';
import kumaoni from '../locales/kumaoni.json';
import garhwali from '../locales/garhwali.json';

const LanguageContext = createContext();

const translations = {
    en,
    hi,
    kumaoni,
    garhwali,
};

export const availableLanguages = [
    { code: 'en', name: 'English', flag: '🇬🇧', ready: true },
    { code: 'hi', name: 'हिंदी', flag: '🇮🇳', ready: true },
    { code: 'kumaoni', name: 'Kumaoni', flag: '🏔️', ready: false },
    { code: 'garhwali', name: 'Garhwali', flag: '⛰️', ready: false },
];

export const LanguageProvider = ({ children }) => {
    const [currentLanguage, setCurrentLanguage] = useState('en');

    // Load language from LocalStorage on mount
    useEffect(() => {
        const savedLanguage = localStorage.getItem('language');
        if (savedLanguage && translations[savedLanguage]) {
            setCurrentLanguage(savedLanguage);
        }
    }, []);

    // Change language and save to LocalStorage
    const changeLanguage = (langCode) => {
        if (translations[langCode]) {
            setCurrentLanguage(langCode);
            localStorage.setItem('language', langCode);
        }
    };

    // Translation function with nested key support (e.g., "nav.home")
    const t = (key) => {
        const keys = key.split('.');
        let value = translations[currentLanguage];

        for (const k of keys) {
            if (value && typeof value === 'object') {
                value = value[k];
            } else {
                // Fallback to English if translation not found
                value = translations.en;
                for (const fallbackKey of keys) {
                    if (value && typeof value === 'object') {
                        value = value[fallbackKey];
                    } else {
                        break;
                    }
                }
                break;
            }
        }

        return typeof value === 'string' ? value : key;
    };

    const value = {
        currentLanguage,
        changeLanguage,
        t,
        availableLanguages,
    };

    return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

// Custom hook for using language context
export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};

export default LanguageContext;
