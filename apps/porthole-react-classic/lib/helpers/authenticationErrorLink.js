import { onError } from "@apollo/client/link/error"

export const withAuthenticationErrorLink = ((client, configurationContext) => {
  const hasLegacyCustomerAccounts = !!configurationContext.legacy_customer_accounts;

  const authenticationErrorLink = onError(({ networkError }) => {
    if (networkError && networkError.statusCode === 401) {
      const currentLocationEncoded = encodeURI(window.location.href)
      window.location.href = `/${hasLegacyCustomerAccounts ? 'account' : 'customer_authentication'}/login?return_to=${currentLocationEncoded}`
    }
  });

  const currentLink = client.link;
  const newLink = authenticationErrorLink.concat(currentLink);
  client.setLink(newLink);

  return client;
});
