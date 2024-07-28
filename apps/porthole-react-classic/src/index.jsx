import React from 'react';
import ReactDOM from 'react-dom/client';
import { ApolloProvider } from '@apollo/client';
import { client } from '@submarine/porthole-core';

import { ConfigurationContext, ContextContext, ThemeContext, parseJsonScript } from '@submarine/porthole-react';

import Porthole from '../lib/app/Porthole';

import { buildThemeContext } from '../lib/helpers';

// build configuration context
const configurationContext = parseJsonScript(document, 'porthole-configuration');

// build context context
const contextContext = parseJsonScript(document, 'porthole-context');

// build theme context
const themeContext = buildThemeContext(
  configurationContext,
  parseJsonScript(document, 'porthole-theme')
);

// render application into root component
ReactDOM.createRoot(document.getElementById('porthole-root')).render(
  <React.StrictMode>
    <ConfigurationContext.Provider value={configurationContext}>
      <ContextContext.Provider value={contextContext}>
        <ThemeContext.Provider value={themeContext}>
          <ApolloProvider client={client}>
            <Porthole />
          </ApolloProvider>
        </ThemeContext.Provider>
      </ContextContext.Provider>
    </ConfigurationContext.Provider>
  </React.StrictMode>
);
