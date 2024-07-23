import CampaignItem from './CampaignItem';
import CampaignOrderGroup from './CampaignOrderGroup'; // eslint-disable-line
import CrowdfundingCampaign from './CrowdfundingCampaign';
import Money from '../common/Money';
import PresaleCampaign from './PresaleCampaign';
import ProductVariant from './ProductVariant';

const isEmpty = (value) => {
  if (Array.isArray(value)) return value.length === 0;

  return value === '' || value == null;
};

class CampaignOrder {
  constructor(data, shop) {
    if (data.__typename === 'CampaignOrderEdge') {
      this.cursor = data.cursor;
      this.data = data.node;
    } else {
      this.cursor = null;
      this.data = data;
    }
    this.shop = shop;
  }

  get allocatedAt() {
    return this.data.milestones.allocatedAt;
  }

  get campaign() {
    if (this.data.campaign.__typename === 'CrowdfundingCampaign')
      return new CrowdfundingCampaign(this.data.campaign, this.shop);

    if (this.data.campaign.__typename === 'PresaleCampaign')
      return new PresaleCampaign(this.data.campaign);

    return null;
  }

  get campaignGid() {
    return this.data.campaign.id;
  }

  get campaignId() {
    return this.campaignGid.replace(/^.*\/(Crowdfunding|Presale)Campaign\//, '');
  }

  get campaignName() {
    return this.data.campaign.reference;
  }

  get campaignOrderGroup() {
    if (!this.data.campaignOrderGroup) return null;

    return new CampaignOrderGroup(this.data.campaignOrderGroup);
  }

  get campaignType() {
    return this.data.campaign.__typename.replace('Campaign', '');
  }

  get campaignItemType() {
    return this.data.campaign.campaignItemType;
  }

  get campaignItem() {
    if (this.campaignItemType === 'PRODUCT') {
      return new CampaignItem({
        resource: this.data.product
      });
    }

    return new CampaignItem({
      resource: this.data.productVariant
    });
  }

  get cancelledAt() {
    return this.data.milestones.cancelledAt;
  }

  get canRetryPayment() {
    const allOrdersCancelledOrAllocated = this.campaignOrderGroup.campaignOrders.every(
      (order) => order.status === 'CANCELLED' || order.fulfilmentStatus === 'ALLOCATED'
    );

    return (
      allOrdersCancelledOrAllocated &&
      this.data.campaignOrderGroup.paymentIntent.hasBalanceOwing &&
      this.campaignOrderGroup.paymentStatus !== 'SUBMITTED'
    );
  }

  get completedAt() {
    return this.data.milestones.completedAt;
  }

  get createdAt() {
    return this.data.milestones.createdAt;
  }

  get customerEmail() {
    return this.data.customer.email;
  }

  get customerExternalId() {
    return this.data.customer.externalId;
  }

  get customerName() {
    const names = [this.data.customer.firstName, this.data.customer.lastName];

    return names.filter((name) => !isEmpty(name)).join(' ');
  }

  get discountedUnitPrice() {
    return new Money(this.data.financials.discountedUnitPrice);
  }

  get dueAt() {
    return this.data.milestones.dueAt;
  }

  get fulfilmentHeldAt() {
    return this.data.milestones.fulfilmentHeldAt;
  }

  get fulfilmentFulfilledAt() {
    return this.data.milestones.fulfilmentFulfilledAt;
  }

  get fulfilmentStatus() {
    return this.data.fulfilmentStatus;
  }

  get gid() {
    return this.data.id;
  }

  get hasDeposit() {
    return this.data.financials.totalDeposit?.amount > 0;
  }

  get hasDiscountedPrice() {
    return this.discountedUnitPrice?.amount !== this.unitPrice?.amount;
  }

  get id() {
    return this.gid.replace(/^.*\/CampaignOrder\//, '');
  }

  get identifier() {
    return this.data.identifier;
  }

  get itemPrice() {
    return new Money(this.data.financials.itemPrice);
  }

  get siblingCampaignOrders() {
    return this.campaignOrderGroup?.campaignOrders.filter((order) => order.id !== this.id);
  }

  get paidAt() {
    return this.data.milestones.paidAt;
  }

  get paymentStatus() {
    return this.data.paymentStatus;
  }

  get productVariant() {
    return new ProductVariant(this.data.productVariant);
  }

  get quantity() {
    return this.data.quantity;
  }

  get shopifyOrderId() {
    return this.data.campaignOrderGroup.externalId;
  }

  get shopifyOrderName() {
    return this.data.campaignOrderGroup.identifier;
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

  get totalShipping() {
    return new Money(this.data.financials.shipping.total);
  }

  get totalTax() {
    return new Money(this.data.financials.tax.total);
  }

  get totalPrice() {
    return new Money(this.data.financials.totalPrice);
  }

  get unitPrice() {
    return new Money(this.data.financials.unitPrice);
  }
}

export default CampaignOrder;
