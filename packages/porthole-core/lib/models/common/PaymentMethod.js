export class PaymentMethod {
  constructor(data) {
    this.cursor = data?.cursor;
    this.data = data?.node || data;
  }

  get cardBrand() {
    const brand = this.data.activePaymentInstrument?.paymentSource?.brand;

    switch (brand) {
      case 'AMEX':
        return 'American Express';
      case 'BOGUS':
        return 'Bogus';
      case 'DINERS_CLUB':
        return 'Diners Club';
      case 'DISCOVER':
        return 'Discover';
      case 'JCB':
        return 'JCB';
      case 'MASTERCARD':
        return 'Mastercard';
      case 'UNIONPAY':
        return 'Unionpay';
      case 'UNKNOWN':
        return 'Unknown';
      case 'VISA':
        return 'Visa';
      default:
        return brand;
    }
  }

  get cardHasExpired() {
    if (!this.data.activePaymentInstrument?.paymentSource?.expired) return false;

    return this.data.activePaymentInstrument.paymentSource.expired;
  }

  get cardExpiry() {
    if (!this.data.activePaymentInstrument?.paymentSource?.expiry) return null;

    return [
      this.data.activePaymentInstrument.paymentSource.expiry.month,
      this.data.activePaymentInstrument.paymentSource.expiry.year
    ].join('/');
  }

  get cardLast4() {
    return this.data.activePaymentInstrument?.paymentSource?.last4;
  }

  get description() {
    return this.data.activePaymentInstrument?.description;
  }

  get gid() {
    return this.data.id;
  }

  get id() {
    return this.gid.replace(/^.*\/PaymentMethod\//, '');
  }
}
