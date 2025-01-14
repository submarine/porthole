import { isJwtExpired } from 'jwt-check-expiration';
import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client/core";
import { setContext } from "@apollo/client/link/context";

const API_ENDPOINT = 'https://api.submarineplatform.com/graphql';
const LOCAL_STORAGE_KEY = 'submarine-customer-token';

const accessToken = () => localStorage.getItem(LOCAL_STORAGE_KEY);

const accessTokenExpired = () => isJwtExpired(accessToken());

const refreshAccessToken = async () => {
  const response = await fetch('/apps/platform/tokens');
  const token = await response.text();
  localStorage.setItem(LOCAL_STORAGE_KEY, token);
};

const httpLink = new HttpLink({
  uri: API_ENDPOINT
});

const authLink = setContext(async (_, { headers }) => {
  if (!accessToken() || accessTokenExpired()) await refreshAccessToken();

  return {
    headers: {
      ...headers,
      authorization: `Bearer ${accessToken()}`
    }
  };
});

const client = new ApolloClient({
  connectToDevTools: true,
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export {
  client
};
