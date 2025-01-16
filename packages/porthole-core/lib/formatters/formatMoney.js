export const formatMoney = (money, { negate = false, taxesIncluded = null } = {}) => {
  if (!money || money.amount === undefined) return '';

  let negateAmount = false;

  if (money.amount < 0 || (negate && money.amount > 0)) negateAmount = true;

  let formattedMoney = new Intl.NumberFormat('en-AU', {
    currency: money.currency || 'AUD',
    style: 'currency'
  }).format(Math.abs(money.amount));

  if (taxesIncluded) formattedMoney = `(${formattedMoney})`;

  if (negateAmount) formattedMoney = `\u2212 ${formattedMoney}`;

  return formattedMoney;
}
