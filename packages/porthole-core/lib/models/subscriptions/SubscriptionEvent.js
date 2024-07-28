export class SubscriptionEvent {
  constructor(data) {
    this.data = data;
  }

  get action() {
    return this.data.action;
  }

  get createdAt() {
    return this.data.createdAt;
  }
}
