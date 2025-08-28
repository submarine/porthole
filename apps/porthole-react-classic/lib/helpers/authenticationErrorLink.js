import { onError } from "@apollo/client/link/error"

const authenticationErrorLink = onError(({ networkError }) => {
  if (networkError && networkError.statusCode === 401) {
    const currentLocationEncoded = encodeURI(window.location.href)
    window.location.href = `/account/login?return_to=${currentLocationEncoded}`
  }
});

export const withAuthenticationErrorLink = (client => {
  const currentLink = client.link;
  const newLink = authenticationErrorLink.concat(currentLink);
  client.setLink(newLink);

  return client;
});
