import CampaignOrder from './CampaignOrder'; // eslint-disable-line
import Money from '../common/Money';

class CampaignOrderGroup {
  constructor(data) {
    this.data = data;
  }

  get campaignOrders() {
    if (!this.data.campaignOrders) return [];

    return this.data.campaignOrders.map((orderData) => new CampaignOrder(orderData));
  }

  get externalId() {
    return this.data.externalId;
  }

  get gid() {
    return this.data.id;
  }

  get hasDeposit() {
    return this.data.financials.totalDeposit?.amount > 0;
  }

  get id() {
    return this.gid.replace(/^.*\/CampaignOrderGroup\//, '');
  }

  get identifier() {
    return this.data.identifier;
  }

  get paymentMethodId() {
    return this.data.paymentMethod.id;
  }

  get paymentStatus() {
    return this.data.paymentStatus;
  }

  get shippingLineTitle() {
    const shippingBreakdown = this.data.financials.shipping.breakdown;

    if (shippingBreakdown.length === 0) return null;

    return shippingBreakdown[0].title;
  }

  get status() {
    return this.data.status;
  }

  get subtotal() {
    return new Money(this.data.financials.subtotal);
  }

  get taxBehaviour() {
    return this.data.financials.tax.behaviour;
  }

  get taxesIncluded() {
    return this.taxBehaviour === 'INCLUSIVE';
  }

  get totalDeposit() {
    return new Money(this.data.financials.totalDeposit);
  }

  get totalPrice() {
    return new Money(this.data.financials.totalPrice);
  }

  get totalShipping() {
    return new Money(this.data.financials.shipping.total);
  }

  get totalTax() {
    return new Money(this.data.financials.tax.total);
  }
}

export default CampaignOrderGroup;
