import { InventoryApplication } from './InventoryApplication';

export class CampaignInventoryItem {
  constructor(data) {
    this.data = data;
  }

  get allocatedCount() {
    return this.data.allocatedCount;
  }

  get applicationBalance() {
    return this.reservedCount - this.appliedCount;
  }

  get appliedCount() {
    return this.data.appliedCount;
  }

  get externalId() {
    return this.data.productVariant.externalId;
  }

  get gid() {
    return this.data.id;
  }

  get id() {
    return this.gid.replace(/^.*\/CampaignInventoryItem\//, '');
  }

  get imageUrl() {
    return this.data.productVariant.imageUrl;
  }

  get inventoryApplications() {
    if (!this.data.inventoryApplications) return [];

    return this.data.inventoryApplications.map(
      (application) => new InventoryApplication(application)
    );
  }

  get productExternalId() {
    return this.data.productVariant.product.externalId;
  }

  get reservedCount() {
    return this.data.reservedCount;
  }

  get sku() {
    return this.data.productVariant.sku;
  }

  get status() {
    if (this.appliedCount > 0 && this.applicationBalance === 0) return 'APPLIED';

    if (this.appliedCount > 0 && this.applicationBalance > 0) return 'UNDER_APPLIED';

    if (this.appliedCount > 0 && this.applicationBalance < 0) return 'OVER_APPLIED';

    return 'PENDING';
  }

  get title() {
    return this.data.productVariant.title;
  }
}
