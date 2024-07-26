import { makeUniqueId } from '@apollo/client/utilities';

export class EditableSubscriptionLine {

  constructor(line, editAction = '') {
    this.line = line;
    this.currentQuantity = this.originalQuantity;
    this.editAction = editAction;
    this.cachedId = line.id || makeUniqueId('gid://submarine/EditableSubscriptionLine/');
  }

  get id() {
    return this.cachedId;
  }

  get basePrice() {
    return this.line.basePrice;
  }

  get product() {
    return this.line.product;
  }

  get productVariant() {
    return this.line.productVariant;
  }

  get unitPrice() {
    return this.line.unitPrice;
  }

  get quantity() {
    return this.currentQuantity;
  }

  get imageUrl() {
    return this.line.imageUrl;
  }

  get originalQuantity() {
    return this.line.quantity;
  }

  get editActionHuman() {
    return this.editAction.toLowerCase();
  }

  get willAdd() {
    return this.editAction === 'ADD';
  }

  get willRemove() {
    return this.editAction === 'REMOVE';
  }

  remove() {
    this.editAction = 'REMOVE';
  }

  restore() {
    if(this.line.id) {
      this.editAction = '';
    } else {
      this.editAction = 'ADD';
    }
  }

  setQuantity(newQuantity) {
    this.currentQuantity = parseInt(newQuantity, 10);
  }

  get isDirty() {
    return (this.quantity !== this.originalQuantity) || !!this.editAction;
  }

  get isEmpty() {
    return (this.quantity === 0) || (this.editAction === 'REMOVE');
  }

}
