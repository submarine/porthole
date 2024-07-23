import Product from './Product';

class ProductVariant {

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
    return this.gid.replace(/^.*\/ProductVariant\//, '');
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

}

export default ProductVariant;
