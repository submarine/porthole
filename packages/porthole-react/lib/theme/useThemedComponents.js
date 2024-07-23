import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

export const useThemedComponents = (defaults) => {
  const theme = useContext(ThemeContext);

  return Object.keys(defaults).reduce((acc, name) => {
    const override = theme[name] || {};

    acc[name] = {
      component: override.component || defaults[name].component,
      className: { ...defaults[name].className, ...override.className },
      style: { ...defaults[name].style, ...override.style }
    };
    return acc;
  }, {});
};
