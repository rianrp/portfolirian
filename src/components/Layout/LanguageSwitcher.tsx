import { Languages } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import { useState } from 'react';

export default function LanguageSwitcher() {
    const { language, changeLanguage, isLoading } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);

    const languages = [
        { code: 'pt' as const, label: '🇧🇷 Português', short: '🇧🇷 PT' },
        { code: 'en' as const, label: '🇺🇸 English', short: '🇺🇸 EN' }
    ];

    const currentLang = languages.find(l => l.code === language);

    const handleLanguageChange = (lang: 'pt' | 'en') => {
        changeLanguage(lang);
        setIsOpen(false);
    };

    return (
        <div className="relative">
            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-accent/50 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                title="Change language / Mudar idioma"
                disabled={isLoading}
            >
                <Languages size={18} className={`text-secondary ${isLoading ? 'animate-pulse' : ''}`} />
                <span className="text-sm font-medium text-white">
                    {currentLang?.short}
                </span>
            </motion.button>

            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <div
                            className="fixed inset-0 z-40"
                            onClick={() => setIsOpen(false)}
                        />
                        
                        {/* Dropdown */}
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="absolute top-full right-0 mt-2 py-2 bg-surface border border-white/10 rounded-lg shadow-xl z-50 min-w-[180px]"
                        >
                            {languages.map((lang) => (
                                <button
                                    key={lang.code}
                                    onClick={() => handleLanguageChange(lang.code)}
                                    className={`w-full px-4 py-2 text-left text-sm hover:bg-white/5 transition-colors flex items-center gap-2 ${
                                        language === lang.code 
                                            ? 'text-accent font-medium' 
                                            : 'text-secondary'
                                    }`}
                                >
                                    {lang.label}
                                    {language === lang.code && (
                                        <span className="ml-auto text-accent">✓</span>
                                    )}
                                </button>
                            ))}
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
}
