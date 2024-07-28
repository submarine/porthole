import { useContext } from 'react';
import { clsx } from 'clsx';

import { ThemeContext } from './ThemeContext';
import { isObject } from '../utilities';

export const useThemedComponent = (id, props = {}) => {
  const theme = useContext(ThemeContext);

  const themeClasses = theme[id]?.classes;
  const themeStyles = theme[id]?.styles;

  return {
    className: buildClassName(themeClasses, props),
    style: buildStyle(themeStyles, props)
  }
};

const buildClassName = (themeClasses, props) => {
  if (themeClasses === undefined) {
    return null;
  }

  const classNames = Object.entries(themeClasses).reduce((acc, [key, value]) => {
    if (isObject(value)) {
      return Object.assign(acc, Object.entries(value).reduce((innerAcc, [innerKey, innerValue]) => {
        return Object.assign(innerAcc, {
          [innerValue]: props[key] === innerKey
        });
      }, {}));
    }

    return Object.assign(acc, {
      [value]: (key === 'base') || !!props[key]
    });
  }, {});

  return clsx(classNames);
};

const buildStyle = (themeStyles, props) => {
  if (themeStyles === undefined) {
    return null;
  }

  return Object.entries(themeStyles).reduce((acc, [key, value]) => {
    if (key === 'base') {
      return Object.assign(acc, value);
    }

    if (isObject(value) && isObject(Object.values(value)[0])) {
      return Object.assign(acc, Object.entries(value).reduce((innerAcc, [innerKey, innerValue]) => {
        if (props[key] !== innerKey) {
          return innerAcc;
        }

        return Object.assign(innerAcc, innerValue);
      }, {}));
    }

    if ((key !== 'base') && !props[key]) {
      return acc;
    }

    return Object.assign(acc, value);
  }, {});
};
