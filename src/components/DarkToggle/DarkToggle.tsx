import React, { useEffect } from 'react';
import { ThemeContext } from '@/components/ThemeContext';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

const properties = {
  dark: {
    circle: {
      r: 9,
    },
    mask: {
      cx: `50%`,
      cy: `23%`,
    },
    svg: {
      transform: `rotate(40deg)`,
    },
    lines: {
      opacity: 0,
    },
  },
  light: {
    circle: {
      r: 5,
    },
    mask: {
      cx: `100%`,
      cy: `0%`,
    },
    svg: {
      transform: `rotate(90deg)`,
    },
    lines: {
      opacity: 1,
    },
  },
  springConfig: { mass: 4, tension: 300, friction: 27 },
};

const DarkToggle = () => {
  const { colorMode, setColorMode } = React.useContext(ThemeContext);
  const [isDarkMode, setDarkMode] = React.useState(colorMode === `dark`);

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
  };

  useEffect(
    () => (isDarkMode ? setColorMode(`dark`) : setColorMode(`light`)),
    [isDarkMode],
  );

  if (!colorMode) {
    return null;
  }

  return (
    <DarkModeSwitch
      animationProperties={properties}
      checked={isDarkMode}
      onChange={toggleDarkMode}
      size={20}
    />
  );
};

export default DarkToggle;
