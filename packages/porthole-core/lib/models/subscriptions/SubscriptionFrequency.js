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

  get maxCycles() {
    return this.data.maxCycles;
  }

  get maxTotalCycles() {
    if (!this.maxCycles) {
      return this.maxCycles;
    }

    return this.maxCycles + 1;
  }

  get minCycles() {
    return this.data.maxCycles;
  }

  get minTotalCycles() {
    if (!this.minCycles) {
      return this.minCycles;
    }

    return this.minCycles + 1;
  }

  get summary() {
    if (this.intervalCount === 1) {
      return `Every ${this.interval.toLowerCase()}`;
    }

    return `Every ${this.intervalCount} ${this.interval.toLowerCase()}s`;
  }

  get title() {
    if (this.intervalCount === 1) {
      return `Every ${this.interval.toLowerCase()}`;
    }

    return `Every ${this.intervalCount} ${this.interval.toLowerCase()}s`;
  }

}
