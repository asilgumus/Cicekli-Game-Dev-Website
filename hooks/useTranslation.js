"use client";

import { useLanguage } from '@/contexts/LanguageContext';
import tr from '../locale/tr.json';
import en from '../locale/en.json';

// Simple nested object property accessor
const getNestedValue = (obj, path) => {
    return path.split('.').reduce((acc, part) => acc && acc[part], obj);
};

const translations = {
    en,
    tr,
};

export function useTranslation() {
    const { language } = useLanguage();
    const currentTranslations = translations[language] || translations.en;

    const t = (key) => {
        const value = getNestedValue(currentTranslations, key);
        if (!value) {
            console.warn(`Translation key missing: ${key} for language: ${language}`);
            return key;
        }
        return value;
    };

    return { t };
}
