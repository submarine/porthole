import { Money } from '../common/Money';
import { Product } from '../common/Product';
import { ProductVariant } from '../common/ProductVariant';

export class SubscriptionLine {

  constructor(data) {
    this.data = data?.node || data;
  }

  get basePrice() {
    return new Money(this.data.basePrice);
  }

  get gid() {
    return this.data.id;
  }

  get id() {
    return this.gid?.replace(/^.*\/SubscriptionItem\//, '');
  }

  get imageUrl() {
    return this.productVariant?.imageUrl;
  }

  get product() {
    return new Product(this.data.product);
  }

  get productVariant() {
    return new ProductVariant(this.data.productVariant);
  }

  get quantity() {
    return this.data.quantity;
  }

}
