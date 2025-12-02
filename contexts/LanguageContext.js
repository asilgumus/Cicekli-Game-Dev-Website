"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
    const [language, setLanguage] = useState('en'); // Default: English

    useEffect(() => {
        // Load language from localStorage on mount
        const savedLanguage = localStorage.getItem('language');
        if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'tr')) {
            setLanguage(savedLanguage);
        }
    }, []);

    const changeLanguage = (lang) => {
        if (lang === 'en' || lang === 'tr') {
            setLanguage(lang);
            localStorage.setItem('language', lang);
        }
    };

    return (
        <LanguageContext.Provider value={{ language, changeLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}

