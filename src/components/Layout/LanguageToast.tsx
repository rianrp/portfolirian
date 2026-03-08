import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, X } from 'lucide-react';
import { useState } from 'react';
import { useLanguageChange } from '../../hooks/useLanguageEffects';

export default function LanguageToast() {
  const [show, setShow] = useState(false);
  const [language, setLanguage] = useState('');

  useLanguageChange((lang) => {
    setLanguage(lang === 'pt' ? '🇧🇷 Português' : '🇺🇸 English');
    setShow(true);

    // Auto hide após 3 segundos
    setTimeout(() => {
      setShow(false);
    }, 3000);
  });

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-4 py-3 bg-surface border border-accent/30 rounded-lg shadow-xl backdrop-blur-md"
        >
          <CheckCircle2 size={20} className="text-accent" />
          <span className="text-sm font-medium text-primary">
            {language === '🇧🇷 Português' 
              ? `Idioma alterado para ${language}` 
              : `Language changed to ${language}`}
          </span>
          <button
            onClick={() => setShow(false)}
            className="ml-2 text-secondary hover:text-primary transition-colors"
          >
            <X size={16} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
