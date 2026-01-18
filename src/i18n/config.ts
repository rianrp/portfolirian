import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en';
import pt from './locales/pt';

const resources = {
  en: { translation: en },
  pt: { translation: pt }
};

// Detectar idioma do navegador ou usar o salvo no localStorage
const getInitialLanguage = (): string => {
  // Primeiro, verificar se há idioma salvo
  const savedLanguage = localStorage.getItem('language');
  if (savedLanguage && (savedLanguage === 'pt' || savedLanguage === 'en')) {
    return savedLanguage;
  }

  // Se não, detectar do navegador
  const browserLang = navigator.language.split('-')[0];
  if (browserLang === 'pt' || browserLang === 'en') {
    return browserLang;
  }

  // Fallback para português
  return 'pt';
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: getInitialLanguage(),
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false // React já faz escape
    },
    react: {
      useSuspense: false // Evita problemas de loading
    }
  });

export default i18n;
