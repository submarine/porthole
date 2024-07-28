import { merge } from 'ts-deepmerge';

import * as defaultTheme from '../themes/default';
import * as dawnTheme from '../themes/dawn';

export const buildThemeContext = (configuration, parsedTheme) => {
  const baseTheme = {
    default: defaultTheme,
    dawn: dawnTheme
  }[configuration.theme] || defaultTheme;

  return merge(
    baseTheme,
    parsedTheme
  );
};
