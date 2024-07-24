import { Address } from '../common/Address';

export class SubscriptionDeliveryMethod {

  constructor(data) {
    this.data = data;
  }

  get address() {
    return new Address(this.data.address);
  }

  get shippingOption() {
    return this.data.shippingOption.title;
  }

  get type() {
    if (this.data.__typename === 'SubscriptionDeliveryMethodShipping') return 'SHIPPING';

    return 'UNKNOWN';
  }

}
