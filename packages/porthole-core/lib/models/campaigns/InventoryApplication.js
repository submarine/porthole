export class InventoryApplication {
  constructor(data) {
    this.data = data;
  }

  get createdAt() {
    return this.data.createdAt;
  }

  get gid() {
    return this.data.id;
  }

  get id() {
    return this.gid.replace(/^.*\/InventoryApplication\//, '');
  }

  get identifier() {
    return `#${this.data.sequentialId}`;
  }

  get quantityReceived() {
    return this.data.quantityReceived;
  }
}
