import { createContext, useContext, useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import { useTranslation as useI18nTranslation } from 'react-i18next';

interface LanguageContextType {
  language: 'pt' | 'en';
  changeLanguage: (lang: 'pt' | 'en') => void;
  isLoading: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const { i18n } = useI18nTranslation();
  const [isLoading, setIsLoading] = useState(false);

  const changeLanguage = async (lang: 'pt' | 'en') => {
    setIsLoading(true);
    try {
      await i18n.changeLanguage(lang);
      localStorage.setItem('language', lang);
      
      // Atualizar meta tags HTML
      document.documentElement.lang = lang;
      
      // Dispatch custom event para analytics
      window.dispatchEvent(new CustomEvent('languageChanged', { detail: { language: lang } }));
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // Setar idioma inicial no HTML
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return (
    <LanguageContext.Provider
      value={{
        language: i18n.language as 'pt' | 'en',
        changeLanguage,
        isLoading
      }}
    >
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
