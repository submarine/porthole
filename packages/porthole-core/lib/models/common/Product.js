import { ProductVariant } from './ProductVariant';
import { isEmpty } from '../../utilities';

export class Product {

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
    return this.gid?.replace(/^.*\/Product\//, '');
  }

  get imageUrl() {
    return this.data.imageUrl;
  }

  get status() {
    return this.data.productStatus || this.data.status;
  }

  get title() {
    return this.data.title;
  }

  get variants() {
    if (isEmpty(this.data.productVariants)) return [];

    return this.data.productVariants.map(
      (productVariantData) => new ProductVariant(productVariantData)
    );
  }

  get variantCount() {
    return this.data.productVariantCount || this.data.productVariants.length;
  }

}
