import { EditableSubscriptionLine } from '../subscriptions/EditableSubscriptionLine';
import { Product } from './Product';
import { SubscriptionLine } from '../subscriptions/SubscriptionLine';

export class ProductVariant {

  constructor(data) {
    this.data = data;
  }

  get externalId() {
    return this.data.externalId;
  }

  get gid() {
    return this.data.id;
  }

  get id() {
    return this.gid?.replace(/^.*\/ProductVariant\//, '');
  }

  get imageUrl() {
    return this.data.imageUrl;
  }

  get product() {
    return new Product(this.data.product);
  }

  get productGid() {
    return this.data.product?.id;
  }

  get productId() {
    return this.productGid?.replace(/^.*\/Product\//, '');
  }

  get sku() {
    return this.data.sku;
  }

  get status() {
    return this.data.variantStatus || this.data.status;
  }

  get title() {
    return this.data.title;
  }

  get optionsTitle() {
    return this.data.title.split('-').pop().trim();
  }

  toEditableSubscriptionLine() {
    return new EditableSubscriptionLine(
      new SubscriptionLine({
        __typename: 'SubscriptionLine',
        basePrice: {
          currency: 'AUD',
          amount: this.price
        },
        product: {
          externalId: this.product.externalId,
          title: this.product.title
        },
        productVariant: {
          externalId: this.externalId,
          imageUrl: this.imageUrl,
          sku: this.sku,
          title: this.title
        },
        quantity: 1
      }),
      'ADD'
    );
  }

}
