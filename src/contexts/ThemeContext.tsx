import { createContext, useContext, useEffect, useState } from 'react';
import type { ReactNode } from 'react';

type Theme = 'dark' | 'light';

interface ThemeContextValue {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (value: Theme) => void;
}

const STORAGE_KEY = 'theme';

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

function getPreferredTheme(): Theme {
  if (typeof window === 'undefined') return 'dark';

  return window.matchMedia?.('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
}

function applyThemeToDocument(value: Theme) {
  if (typeof document === 'undefined') return;
  const root = document.documentElement;
  root.setAttribute('data-theme', value);
  root.classList.toggle('dark', value === 'dark');
  root.classList.toggle('light', value === 'light');
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [hasExplicitPreference, setHasExplicitPreference] = useState(() => {
    if (typeof window === 'undefined') return false;
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored === 'light' || stored === 'dark';
  });

  const [theme, setThemeState] = useState<Theme>(() => {
    const stored = typeof window !== 'undefined' ? localStorage.getItem(STORAGE_KEY) : null;
    const preferred = stored === 'light' || stored === 'dark' ? (stored as Theme) : getPreferredTheme();
    applyThemeToDocument(preferred);
    return preferred;
  });

  useEffect(() => {
    applyThemeToDocument(theme);
    if (hasExplicitPreference) {
      localStorage.setItem(STORAGE_KEY, theme);
    }
  }, [theme, hasExplicitPreference]);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: light)');
    const handleChange = (event: MediaQueryListEvent) => {
      if (!hasExplicitPreference) {
        setThemeState(event.matches ? 'light' : 'dark');
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [hasExplicitPreference]);

  const setTheme = (value: Theme) => {
    setHasExplicitPreference(true);
    setThemeState(value);
  };

  const toggleTheme = () => setThemeState((current) => {
    const next = current === 'dark' ? 'light' : 'dark';
    setHasExplicitPreference(true);
    return next;
  });

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
