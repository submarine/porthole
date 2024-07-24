import { Collection } from './Collection';

export class ItemCollection extends Collection {

  constructor(data, shop) {
    super(data);

    this.data = data;
    this.shop = shop;
  }

  get firstItem() {
    return this.items[0];
  }

  get hasItems() {
    return this.itemCount > 0;
  }

  get itemCount() {
    return this.items.length;
  }

  targetItemIndex(targetId) {
    return this.items.findIndex((item) => item.id === targetId);
  }

  targetItem(targetId) {
    const index = this.targetItemIndex(targetId);

    if (index < 0) return null;

    return this.items[index];
  }

  previousItem(targetId) {
    const index = this.targetItemIndex(targetId) - 1;

    if (index < 0) return null;

    return this.items[index];
  }

  nextItem(targetId) {
    const index = this.targetItemIndex(targetId) + 1;

    if (index < 0) return null;

    return this.items[index];
  }

}
