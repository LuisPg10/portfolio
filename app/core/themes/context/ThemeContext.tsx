import { createContext, useLayoutEffect, useState } from 'react';
import type { Theme } from '../types/theme';

type ThemeContextProps = {
  theme: Theme;
  prefersDarkColorScheme: boolean;
  setTheme: (theme: Theme) => void;
};

export const ThemeContext = createContext<ThemeContextProps>({
  theme: 'system',
  prefersDarkColorScheme: false,
  setTheme: () => null,
});

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
};

export function ThemeProvider({
  children,
  defaultTheme = 'system',
  storageKey = 'ui-theme',
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(defaultTheme);
  const [prefersDarkColorScheme, setPrefersDarkColorScheme] = useState(false);

  useLayoutEffect(() => {
    const schemeColorQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const applyTheme = () => {
      const root = window.document.documentElement;

      const systemIsDark = schemeColorQuery.matches;
      setPrefersDarkColorScheme(systemIsDark);

      root.classList.remove('light', 'dark');

      if (theme !== 'system') {
        root.classList.add(theme);
        return;
      }

      root.classList.add(systemIsDark ? 'dark' : 'light');
    };

    applyTheme();

    schemeColorQuery.addEventListener('change', applyTheme);

    return () => {
      schemeColorQuery.removeEventListener('change', applyTheme);
    };
  }, [theme]);

  return (
    <ThemeContext
      value={{
        theme,
        prefersDarkColorScheme,
        setTheme: (theme: Theme) => {
          localStorage.setItem(storageKey, theme);
          setTheme(theme);
        },
      }}
    >
      {children}
    </ThemeContext>
  );
}
