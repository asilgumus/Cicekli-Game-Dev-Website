import tr from '../locale/tr.json';

// Simple nested object property accessor
const getNestedValue = (obj, path) => {
    return path.split('.').reduce((acc, part) => acc && acc[part], obj);
};

export function useTranslation() {
    const t = (key) => {
        const value = getNestedValue(tr, key);
        if (!value) {
            console.warn(`Translation key missing: ${key}`);
            return key;
        }
        return value;
    };

    return { t };
}
