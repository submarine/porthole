import { CampaignInventoryItem } from './CampaignInventoryItem';
import { Product } from '../common/Product';
import { ProductVariant } from '../common/ProductVariant';

export class CampaignItem {
  constructor(data) {
    this.data = data;
  }

  get allocatedCount() {
    return this.data.allocatedCount;
  }

  get appliedCount() {
    return this.data.appliedCount;
  }

  get canApplyInventory() {
    return this.reservedCount > this.appliedCount;
  }

  get gid() {
    return this.data.id;
  }

  get id() {
    return this.gid.replace(/^.*\/CampaignItem\//, '');
  }

  get inventoryItems() {
    return this.data.campaignInventoryItems.map((item) => new CampaignInventoryItem(item));
  }

  get isProduct() {
    return this.resourceType === 'PRODUCT';
  }

  get percentageApplied() {
    if (this.reservedCount === 0) return 0;

    const percentage = (this.appliedCount / this.reservedCount) * 100;

    return parseInt(percentage, 10);
  }

  get productExternalId() {
    if (this.isProduct) return this.resource.externalId;

    return this.resource.product.externalId;
  }

  get productId() {
    if (this.isProduct) return this.resource.id;

    return this.resource.product.id;
  }

  get reservedCount() {
    return this.data.reservedCount;
  }

  get resource() {
    if (this.isProduct) return new Product(this.data.resource);

    return new ProductVariant(this.data.resource);
  }

  get resourceType() {
    return this.data.resource.__typename === 'Product' ? 'PRODUCT' : 'PRODUCT_VARIANT';
  }
}
