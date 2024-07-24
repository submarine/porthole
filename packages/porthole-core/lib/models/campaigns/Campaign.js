import { DateTime } from 'luxon';

import { CampaignItem } from './CampaignItem';
import { Product } from '../common/Product';
import { ProductVariant } from '../common/ProductVariant';

export class Campaign {
  constructor(data, shop) {
    this.data = data;
    this.shop = shop;

    this.canEdit = true;
    this.canUpdateItemType = false;
    this.canUpdateReference = true;
  }

  get activeCampaignOrdersCount() {
    return this.data.activeCampaignOrdersCount;
  }

  get allocatedInventoryCount() {
    return this.data.allocatedInventoryCount;
  }

  get allocationStatus() {
    return this.data.allocationStatus;
  }

  get appliedInventoryCount() {
    return this.data.appliedInventoryCount;
  }

  get archivedAt() {
    return this.data.archivedAt;
  }

  get campaignOrdersCount() {
    return this.data.campaignOrdersCount;
  }

  get canApplyInventory() {
    if (this.status === 'ENDED') return true;
    if (this.status === 'FULFILLING') return true;

    return false;
  }

  get canCancel() {
    if (this.status === 'ENDED') return true;
    if (this.status === 'LAUNCHED') return true;
    if (this.status === 'PENDING') return true;

    return false;
  }

  get canDelete() {
    if (this.campaignOrdersCount > 0) return false;
    if (this.status === 'PENDING') return true;
    if (this.status === 'CANCELLED') return true;

    return false;
  }

  get canEnd() {
    if (this.status === 'LAUNCHED' && this.activeCampaignOrdersCount > 0) return true;

    return false;
  }

  get canFulfil() {
    if (this.status === 'ENDED' && this.appliedInventoryCount > 0) return true;

    return false;
  }

  get canLaunch() {
    if (this.status === 'PENDING') return true;

    return false;
  }

  get canUpdateDeposit() {
    if (this.isLaunched || this.isPending) return true;

    return false;
  }

  get canUpdateEndAt() {
    if (this.isLaunched || this.isPending) return true;

    return false;
  }

  get canUpdateFulfilAt() {
    if (this.isEnded || this.isLaunched || this.isPending) return true;

    return false;
  }

  get canUpdateGoal() {
    if (this.isLaunched || this.isPending) return true;

    return false;
  }

  get canUpdateGracePeriod() {
    if (this.isCancelled || this.isCompleted) return false;

    return true;
  }

  get canUpdateItems() {
    if (this.isPending) return true;

    return false;
  }

  get canUpdateLaunchAt() {
    if (this.isPending) return true;

    return false;
  }

  get canUpdateLimit() {
    if (this.isLaunched || this.isPending) return true;

    return false;
  }

  get canUpdateName() {
    if (this.isLaunched) return true;
    if (this.isPending) return true;

    return false;
  }

  get cancelledAt() {
    return this.data.cancelledAt;
  }

  get completedAt() {
    return this.data.completedAt;
  }

  get createdAt() {
    return this.data.createdAt;
  }

  get description() {
    return this.data.description;
  }

  get endAt() {
    return this.data.endAt;
  }

  get endedAt() {
    return this.data.endedAt;
  }

  get estimatedCompleteAt() {
    const endAtDateTime = DateTime.fromISO(this.endAt);
    const fulfilAtDateTime = this.fulfilAt ? DateTime.fromISO(this.fulfilAt) : endAtDateTime;

    const maxDateTime = DateTime.max(
      endAtDateTime,
      fulfilAtDateTime,
      DateTime.now().plus({weeks: 1}).toUTC()
    );

    return maxDateTime.plus({hours: this.gracePeriodHours}).toUTC().toISO();
  }

  get fulfilAt() {
    return this.data.fulfilAt;
  }

  get fulfillingAt() {
    return this.data.fulfillingAt;
  }

  get gid() {
    return this.data.id;
  }

  get gracePeriodHours() {
    return this.data.gracePeriodHours;
  }

  get hasEnded() {
    return !!this.endedAt;
  }

  get hasLaunched() {
    return !!this.launchedAt;
  }

  get hasNextAction() {
    return !!this.nextAction;
  }

  get id() {
    return this.gid.replace(/^.*\/(Crowdfunding|Presale)Campaign\//, '');
  }

  get identifier() {
    return `#${this.sequentialId}`;
  }

  get imageUrl() {
    return this.imageUrls.filter((url) => !!url)[0];
  }

  get imageUrls() {
    return this.items.map((item) => item.resource.imageUrl);
  }

  get inferredGracePeriod() {
    if (this.gracePeriodHours % 24 === 0) return this.gracePeriodHours / 24;

    return this.gracePeriodHours;
  }

  get inferredGracePeriodUnits() {
    if (this.gracePeriodHours % 24 === 0) return 'days';

    return 'hours';
  }

  get isArchived() {
    return !!this.archivedAt;
  }

  get items() {
    return this.data.campaignItems.map((item) => new CampaignItem(item)).filter((item) => !!item);
  }

  get isCancelled() {
    return this.status === 'CANCELLED';
  }

  get isCompleted() {
    return this.status === 'COMPLETED';
  }

  get isEnded() {
    return this.status === 'ENDED';
  }

  get isFulfilling() {
    return this.status === 'FULFILLING';
  }

  get isLaunched() {
    return this.status === 'LAUNCHED';
  }

  get isPending() {
    return this.status === 'PENDING';
  }

  get launchAt() {
    return this.data.launchAt;
  }

  get launchedAt() {
    return this.data.launchedAt;
  }

  get limit() {
    return this.data.limit;
  }

  get name() {
    return this.data.name;
  }

  get nextAction() {
    if (this.isArchived) return 'Unarchive';

    const actionNames = {
      PENDING: 'Launch',
      LAUNCHED: 'End',
      ENDED: 'Fulfil',
      COMPLETED: 'Archive',
      CANCELLED: 'Archive'
    };

    return actionNames[this.status];
  }

  get orderedTimestamps() {
    const now = DateTime.now().toUTC();

    const timestamps = [
      {
        hideLabel: false,
        label: 'Cancelled',
        name: 'cancelledAt',
        timestamp: this.cancelledAt,
        type: 'status'
      },
      {
        hideLabel: false,
        label: 'Completed',
        name: 'completedAt',
        timestamp: this.completedAt,
        type: 'status'
      },
      {
        hideLabel: false,
        label: 'Created',
        name: 'createdAt',
        timestamp: this.createdAt,
        type: 'status'
      },
      {hideLabel: false, label: 'End', name: 'endAt', timestamp: this.endAt, type: 'action'},
      {
        hideLabel: false,
        label: 'Ended',
        name: 'endedAt',
        timestamp: this.endedAt,
        type: 'status'
      },
      {
        hideLabel: true,
        label: 'Complete',
        name: 'estimatedCompleteAt',
        timestamp: this.estimatedCompleteAt,
        type: 'action'
      },
      {
        hideLabel: false,
        label: 'Fulfil',
        name: 'fulfilAt',
        timestamp: this.fulfilAt,
        type: 'action'
      },
      {
        hideLabel: false,
        label: 'Fulfilling',
        name: 'fulfillingAt',
        timestamp: this.fulfillingAt,
        type: 'status'
      },
      {
        hideLabel: false,
        label: 'Launch',
        name: 'launchAt',
        timestamp: this.launchAt,
        type: 'action'
      },
      {
        hideLabel: false,
        label: 'Launched',
        name: 'launchedAt',
        timestamp: this.launchedAt,
        type: 'status'
      },
      {hideLabel: true, label: 'Now', name: 'now', timestamp: now.toISO(), type: 'info'}
    ];

    return timestamps
      .filter((item) => !!item.timestamp)
      .map((item) => ({
        ...item,
        ...{timestamp: DateTime.fromISO(item.timestamp)}
      }))
      .map((item) => ({
        ...item,
        ...{position: item.timestamp < now ? 'past' : 'future'}
      }))
      .sort((a, b) => a.timestamp - b.timestamp);
  }

  get percentageAllocated() {
    if (this.reservedItemsCount === 0) return 0;

    const percentage = (this.allocatedInventoryCount / this.reservedItemsCount) * 100;

    if (percentage > 100) return 100;

    return parseInt(percentage, 10);
  }

  get pickerResources() {
    //    if (this.resourceType === 'PRODUCT')
    if (this.resourceType === 'PRODUCT')
      return this.products.map((product) => product.toPickerResource());

    return this.productVariants.map((variant) => variant.toPickerResource());
  }

  get pickerResourceType() {
    if (this.resourceType === 'PRODUCT') return 'Product';
    if (this.resourceType === 'PRODUCT_VARIANT') return 'ProductVariant';

    return '';
  }

  get products() {
    if (!this.data.products) return [];

    return this.data.products.map((product) => new Product(product));
  }

  get productVariants() {
    if (!this.data.productVariants) return [];

    return this.data.productVariants.map((variant) => new ProductVariant(variant));
  }

  get reference() {
    return this.data.reference;
  }

  get reservedItemsCount() {
    return this.data.reservedItemsCount;
  }

  get resourceType() {
    return this.data.campaignItemType;
  }

  get resourceTypeName() {
    if (this.resourceType === 'PRODUCT') return 'product';
    if (this.resourceType === 'PRODUCT_VARIANT') return 'variant';

    return '';
  }

  get sequentialId() {
    return this.data.sequentialId;
  }

  get status() {
    return this.data.status;
  }
}
