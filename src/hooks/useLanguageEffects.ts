import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

/**
 * Hook para executar ações quando o idioma muda
 */
export function useLanguageChange(callback: (language: string) => void) {
  const { i18n } = useTranslation();

  useEffect(() => {
    const handleLanguageChange = (lng: string) => {
      callback(lng);
    };

    i18n.on('languageChanged', handleLanguageChange);

    return () => {
      i18n.off('languageChanged', handleLanguageChange);
    };
  }, [i18n, callback]);
}

/**
 * Hook para atualizar atributos HTML quando o idioma muda
 */
export function useLanguageHTMLAttributes() {
  const { i18n } = useTranslation();

  useEffect(() => {
    // Atualizar lang attribute
    document.documentElement.lang = i18n.language;

    // Atualizar dir attribute se necessário (RTL support)
    const rtlLanguages = ['ar', 'he', 'fa'];
    document.documentElement.dir = rtlLanguages.includes(i18n.language) ? 'rtl' : 'ltr';
  }, [i18n.language]);
}

/**
 * Hook para analytics de mudança de idioma
 */
export function useLanguageAnalytics() {
  useLanguageChange((language) => {
    // Exemplo de tracking analytics
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'language_change', {
        language: language,
        timestamp: new Date().toISOString()
      });
    }

    // Log para desenvolvimento
    console.log(`Language changed to: ${language}`);
  });
}
