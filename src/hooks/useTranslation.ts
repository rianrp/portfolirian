import { useTranslation as useI18nTranslation } from 'react-i18next';

/**
 * Custom hook for translations with better TypeScript support
 * @returns Translation function and i18n utilities
 */
export const useTranslation = () => {
  const { t, i18n } = useI18nTranslation();

  const changeLanguage = (lang: 'pt' | 'en') => {
    i18n.changeLanguage(lang);
    localStorage.setItem('language', lang);
  };

  const currentLanguage = i18n.language as 'pt' | 'en';

  return {
    t,
    i18n,
    changeLanguage,
    currentLanguage,
    isPortuguese: currentLanguage === 'pt',
    isEnglish: currentLanguage === 'en'
  };
};
