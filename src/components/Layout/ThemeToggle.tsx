import { motion } from 'framer-motion';
import { Moon, SunMedium } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

interface ThemeToggleProps {
  className?: string;
}

export default function ThemeToggle({ className = '' }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();
  const isLight = theme === 'light';

  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`flex items-center gap-2 px-3 py-2 rounded-lg bg-primary/5 border border-primary/10 hover:border-accent/50 hover:bg-accent/10 transition-all duration-300 ${className}`}
      aria-label={isLight ? 'Ativar tema escuro' : 'Ativar tema claro'}
      title={isLight ? 'Ativar tema escuro' : 'Ativar tema claro'}
    >
      <div className="relative h-5 w-5">
        <motion.div
          key={theme}
          initial={{ opacity: 0, rotate: -90, scale: 0.8 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          exit={{ opacity: 0, rotate: 90, scale: 0.8 }}
          transition={{ duration: 0.2 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          {isLight ? (
            <Moon size={18} className="text-primary" />
          ) : (
            <SunMedium size={18} className="text-primary" />
          )}
        </motion.div>
      </div>
      <span className="text-sm font-medium text-primary">
        {isLight ? 'Light' : 'Dark'}
      </span>
    </motion.button>
  );
}
