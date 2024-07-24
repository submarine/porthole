export class SubscriptionFrequency {

  constructor(data) {
    this.data = data;
  }

  get description() {
    return this.data.description;
  }

  get interval() {
    return this.data.interval;
  }

  get intervalCount() {
    return parseInt(this.data.intervalCount, 10);
  }

  get intervalCountString() {
    return this.data.intervalCount.toString();
  }

  get summary() {
    if (this.intervalCount === 1) {
      return `Every ${this.interval.toLowerCase()}`;
    }

    return `Every ${this.intervalCount} ${this.interval.toLowerCase()}s`;
  }

  get title() {
    if (this.intervalCount === 1) {
      return `Delivered every ${this.interval.toLowerCase()}`;
    }

    return `Delivered every ${this.intervalCount} ${this.interval.toLowerCase()}s`;
  }

}
