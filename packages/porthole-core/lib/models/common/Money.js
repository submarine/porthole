export class Money {

  constructor(data) {
    this.data = data || {};
  }

  get amount() {
    return this.data.amount;
  }

  get cents() {
    return Math.round(parseFloat(this.data.amount) * 100);
  }

  get currency() {
    return this.data.currency;
  }

  get isZero() {
    return this.cents === 0;
  }

}
