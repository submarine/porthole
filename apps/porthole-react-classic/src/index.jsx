import React from 'react';
import ReactDOM from 'react-dom/client';
import { ApolloProvider } from '@apollo/client';
import { client } from '@submarine/porthole-core';

import { ConfigurationContext, ThemeContext, parseJsonScript } from '@submarine/porthole-react';

import Porthole from '../lib/app/Porthole';

// build configuration context
const configurationContext = parseJsonScript(document, 'porthole-configuration');

// build theme context
const themeContext = parseJsonScript(document, 'porthole-theme');

// render application into root component
ReactDOM.createRoot(document.getElementById('porthole-root')).render(
  <React.StrictMode>
    <ConfigurationContext.Provider value={configurationContext}>
      <ThemeContext.Provider value={themeContext}>
        <ApolloProvider client={client}>
          <Porthole />
        </ApolloProvider>
      </ThemeContext.Provider>
    </ConfigurationContext.Provider>
  </React.StrictMode>
);
