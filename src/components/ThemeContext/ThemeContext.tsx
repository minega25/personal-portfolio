import React from 'react';
import { COLORS } from '@/constants';

type ThemeProviderProps = {
  children: React.ReactNode;
};

interface ThemeProps {
  colorMode: string | undefined;
  setColorMode: any | undefined;
}

export const ThemeContext = React.createContext<ThemeProps>({
  colorMode: undefined,
  setColorMode: undefined,
});

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [colorMode, rawSetColorMode] = React.useState<string | undefined>(
    undefined,
  );

  React.useEffect(() => {
    const root = window.document.documentElement;
    const initialColorValue: string =
      root.style.getPropertyValue(`--initial-color-mode`);
    rawSetColorMode(initialColorValue);
  }, []);

  const contextValue = React.useMemo(() => {
    function setColorMode(newValue: string) {
      const root = window.document.documentElement;
      rawSetColorMode(newValue);
      localStorage.setItem(`color-mode`, newValue);
      root.style.setProperty(
        `--color-text`,
        newValue === `light` ? COLORS.light.text : COLORS.dark.text,
      );
      root.style.setProperty(
        `--color-background`,
        newValue === `light` ? COLORS.light.background : COLORS.dark.background,
      );
      root.style.setProperty(
        `--color-primary`,
        newValue === `light` ? COLORS.light.primary : COLORS.dark.primary,
      );
      root.style.setProperty(
        `--shadow-color`,
        newValue === `light` ? COLORS.light.shadow : COLORS.dark.shadow,
      );
      root.style.setProperty(
        `--color-subtle-floating`,
        newValue === `light`
          ? COLORS.light.subtleFloating
          : COLORS.dark.subtleFloating,
      );
    }

    return {
      colorMode,
      setColorMode,
    };
  }, [colorMode, rawSetColorMode]);

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
