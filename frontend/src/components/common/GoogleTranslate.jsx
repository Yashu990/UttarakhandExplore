import React, { useEffect, useState } from 'react';

const GoogleTranslate = ({ autoTranslate = false, targetLanguage = null }) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isTranslating, setIsTranslating] = useState(false);

    useEffect(() => {
        // Custom styling to hide the top bar and "Powered by Google"
        const style = document.createElement('style');
        style.innerHTML = `
            /* Hide Google Translate banner */
            .goog-te-banner-frame.skiptranslate { 
                display: none !important; 
            } 
            
            /* Remove top padding added by Google Translate */
            body { 
                top: 0px !important; 
            } 
            
            /* Style the dropdown to match our design */
            #google_translate_element .goog-te-gadget-simple {
                background-color: transparent !important;
                border: 1px solid #E5E7EB !important;
                padding: 8px 12px !important;
                border-radius: 0.75rem !important;
                font-family: 'Inter', sans-serif !important;
                font-size: 14px !important;
                transition: all 0.2s !important;
            }
            
            #google_translate_element .goog-te-gadget-simple:hover {
                border-color: #F97316 !important;
                background-color: #FFF7ED !important;
            }
            
            /* Style the dropdown text */
            #google_translate_element .goog-te-menu-value {
                color: #374151 !important;
            }
            
            #google_translate_element .goog-te-menu-value span {
                color: #374151 !important;
            }
            
            /* Hide the "Powered by" text */
            #google_translate_element .goog-te-gadget-simple .goog-te-menu-value span:first-child {
                display: none !important;
            }
            
            /* Hide the Google Translate icon */
            .goog-te-gadget-icon {
                display: none !important;
            }
            
            /* Style the arrow */
            #google_translate_element .goog-te-gadget-simple span[style] {
                border-left: none !important;
                color: #6B7280 !important;
            }
            
            /* Loading state */
            .translating-overlay {
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: rgba(0, 0, 0, 0.5);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 9999;
                backdrop-filter: blur(4px);
            }
            
            .translating-message {
                background: white;
                padding: 24px 32px;
                border-radius: 16px;
                box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
                display: flex;
                align-items: center;
                gap: 16px;
            }
            
            .spinner {
                width: 24px;
                height: 24px;
                border: 3px solid #FED7AA;
                border-top-color: #F97316;
                border-radius: 50%;
                animation: spin 1s linear infinite;
            }
            
            @keyframes spin {
                to { transform: rotate(360deg); }
            }
        `;
        document.head.appendChild(style);

        // Mark elements that should not be translated
        const markNotranslate = () => {
            // Don't translate the language selector itself
            document.querySelectorAll('.notranslate').forEach(el => {
                el.classList.add('notranslate');
            });
        };

        markNotranslate();
        setIsLoaded(true);

        return () => {
            document.head.removeChild(style);
        };
    }, []);

    useEffect(() => {
        // Auto-translate when targetLanguage changes
        if (autoTranslate && targetLanguage && isLoaded) {
            console.log('Attempting to translate to:', targetLanguage);

            const translatePage = () => {
                setIsTranslating(true);

                // Wait for Google Translate to be fully loaded
                const interval = setInterval(() => {
                    const select = document.querySelector('.goog-te-combo');

                    if (select && window.google && window.google.translate) {
                        clearInterval(interval);
                        console.log('Google Translate ready, triggering translation...');

                        // Set the value
                        select.value = targetLanguage;

                        // Dispatch multiple events to ensure it works
                        select.dispatchEvent(new Event('change', { bubbles: true }));
                        select.dispatchEvent(new Event('input', { bubbles: true }));

                        //Also try clicking the select to trigger Google's listener
                        const clickEvent = new MouseEvent('click', {
                            view: window,
                            bubbles: true,
                            cancelable: true
                        });
                        select.dispatchEvent(clickEvent);

                        console.log('Translation triggered for language:', targetLanguage);

                        // Hide loading after translation completes
                        setTimeout(() => {
                            setIsTranslating(false);
                        }, 2000);
                    }
                }, 200);

                // Timeout after 10 seconds
                setTimeout(() => {
                    clearInterval(interval);
                    setIsTranslating(false);
                    console.log('Translation timeout - Google Translate may not be loaded');
                }, 10000);
            };

            // Small delay to ensure DOM is ready
            setTimeout(translatePage, 500);
        }
    }, [autoTranslate, targetLanguage, isLoaded]);

    return (
        <>
            <div id="google_translate_element" className="google-translate-container" />

            {/* Loading overlay when translating */}
            {isTranslating && (
                <div className="translating-overlay">
                    <div className="translating-message">
                        <div className="spinner"></div>
                        <div>
                            <p className="text-lg font-semibold text-gray-900">Translating content...</p>
                            <p className="text-sm text-gray-600">Please wait while we prepare the page</p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default GoogleTranslate;
