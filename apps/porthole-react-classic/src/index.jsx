import React from 'react';
import ReactDOM from 'react-dom/client';
import { ApolloProvider } from '@apollo/client';
import { client } from '@submarine/porthole-core';

import { ThemeContext, parseJsonScript } from '@submarine/porthole-react';

import Porthole from '../lib/app/Porthole';

// build theme context
const themeContext = parseJsonScript(document, 'porthole-theme');

// render application into root component
ReactDOM.createRoot(document.getElementById('porthole-root')).render(
  <React.StrictMode>
    <ThemeContext.Provider value={themeContext}>
      <ApolloProvider client={client}>
        <Porthole />
      </ApolloProvider>
    </ThemeContext.Provider>
  </React.StrictMode>
);
