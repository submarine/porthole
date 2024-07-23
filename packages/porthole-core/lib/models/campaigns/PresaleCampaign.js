import Campaign from './Campaign';

class PresaleCampaign extends Campaign {
  constructor(data, shop) {
    super(data?.node || data, shop);

    this.campaignType = 'PRESALE';
    this.cursor = data?.cursor;
    this.isCrowdfund = false;
    this.isPresale = true;
  }

  get inventoryPolicy() {
    return this.data.inventoryPolicy;
  }

  get inventoryPolicyHuman() {
    if (this.inventoryPolicy === 'ON_FULFILMENT') return 'On fulfilment';

    return 'On sale';
  }

  get depositPercentage() {
    return this.data.deposit?.value;
  }

  get percentageReserved() {
    const percentage = (this.reservedItemsCount / this.limit) * 100;

    if (percentage > 100) return 100;

    return parseInt(percentage, 10);
  }
}

export default PresaleCampaign;
