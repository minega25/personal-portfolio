import React from 'react';

import { COLORS } from './src/constants';

const MagicScriptTag = () => {
  const codeToRunOnClient = `
  (function() {
    function getInitialColorMode() {
      const persistedColorPreference = window.localStorage.getItem('color-mode');
      const hasPersistedPreference = typeof persistedColorPreference === 'string';
      if (hasPersistedPreference) {
        return persistedColorPreference;
      }

      const mql = window.matchMedia('(prefers-color-scheme: dark)');
      const hasMediaQueryPreference = typeof mql.matches === 'boolean';
      if (hasMediaQueryPreference) {
        return mql.matches ? 'dark' : 'light';
      }

      return 'light';
    }
    const colorMode = getInitialColorMode();
    const root = document.documentElement;
    root.style.setProperty(
      '--color-text',
      colorMode === 'light'
        ? '${COLORS.light.text}'
        : '${COLORS.dark.text}'
    );
    root.style.setProperty(
      '--color-background',
      colorMode === 'light'
        ? '${COLORS.light.background}'
        : '${COLORS.dark.background}'
    );
    root.style.setProperty(
      '--color-primary',
      colorMode === 'light'
        ? '${COLORS.light.primary}'
        : '${COLORS.dark.primary}'
    );
    root.style.setProperty(
      '--color-subtle-floating',
      colorMode === 'light'
        ? '${COLORS.light.subtleFloating}'
        : '${COLORS.dark.subtleFloating}'
    );
    root.style.setProperty(
      '--shadow-color',
      colorMode === 'light'
        ? '${COLORS.light.shadow}'
        : '${COLORS.dark.shadow}'
    );
    root.style.setProperty('--initial-color-mode', colorMode);
  })()  
    `;
  // eslint-disable-next-line react/no-danger
  return <script dangerouslySetInnerHTML={{ __html: codeToRunOnClient }} />;
};

export const onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents(<MagicScriptTag key="say hi" />);
};
