import { Money, Product, ProductVariant } from '../common';
import {EditableSubscriptionLine} from "./EditableSubscriptionLine.js";

export class SubscriptionOrderLine {
  constructor(data) {
    this.data = data?.node || data;
  }

  get gid() {
    return this.data.id;
  }

  get id() {
    return this.gid?.replace(/^.*\/SubscriptionOrderItem\//, '');
  }

  get imageUrl() {
    return this.productVariant?.imageUrl;
  }

  get isDiscounted() {
    return parseFloat(this.data.financials.discounts.total.amount) > 0;
  }

  get lineType() {
    return this.data.lineType;
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

  get unitPrice() {
    return new Money(this.data.financials.unitPrice);
  }

  get unitPriceAfterDiscounts() {
    return new Money(this.data.financials.unitPriceAfterDiscounts);
  }

  get linePrice() {
    return new Money(this.data.financials.linePrice);
  }

  get linePriceAfterDiscounts() {
    return new Money(this.data.financials.linePriceAfterDiscounts);
  }

  toEditableSubscriptionLine() {
    return new EditableSubscriptionLine(
      this
    );
  }

}
