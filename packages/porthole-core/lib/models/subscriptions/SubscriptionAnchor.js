export class SubscriptionAnchor {

  constructor(data, frequency) {
    this.data = data;
    this.frequency = frequency;
  }

  get day() {
    if (!this.data.day) return '';

    return this.data.day;
  }

  get dayInt() {
    if (this.day === '') return null;

    return parseInt(this.day, 10);
  }

  get deliverySlots() {
    if (!this.data.schedule) return [];

    return this.data.schedule.map((slot) => slot.deliverAt);
  }

  get description() {
    return this.data.description;
  }

  get gid() {
    return this.data.id;
  }

  get id() {
    return this.gid.replace(/^.*\/SubscriptionAnchor\//, '');
  }

  get isFixed() {
    return !this.isFlexible;
  }

  get isFlexible() {
    return this.type === 'FLEXIBLE';
  }

  get month() {
    if (!this.data.month) return '';

    return this.data.month;
  }

  get monthInt() {
    if (this.month === '') return null;

    return parseInt(this.month, 10);
  }

  get name() {
    let generatedName = this.frequency.title;

    if (this.time) generatedName += ` at ${this.time}`;

    return generatedName;
  }

  get nullableTime() {
    if (this.time === '') return null;

    return this.data.time;
  }

  get time() {
    return this.data.time;
  }

  get type() {
    return this.data.type;
  }

  toFormData(generateNameFromFrequency = false) {
    return {
      day: this.dayInt,
      month: this.monthInt,
      name: generateNameFromFrequency ? this.name : '',
      time: this.nullableTime,
      type: this.type
    };
  }
}
