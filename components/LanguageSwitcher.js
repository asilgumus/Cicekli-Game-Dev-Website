"use client";

import React from 'react';
import { Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import styles from './LanguageSwitcher.module.css';

export default function LanguageSwitcher() {
    const { language, changeLanguage } = useLanguage();

    const toggleLanguage = () => {
        const newLanguage = language === 'en' ? 'tr' : 'en';
        changeLanguage(newLanguage);
    };

    return (
        <button
            onClick={toggleLanguage}
            className={styles.languageButton}
            aria-label="Change language"
            title={language === 'en' ? 'Türkçe\'ye geç' : 'Switch to English'}
        >
            <Globe size={20} className={styles.icon} />
            <span className={styles.languageCode}>
                {language === 'en' ? 'EN' : 'TR'}
            </span>
        </button>
    );
}

