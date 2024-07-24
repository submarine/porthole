import { SubscriptionAnchor } from './SubscriptionAnchor';
import { SubscriptionFrequency } from './SubscriptionFrequency';

export class SubscriptionPlan {

  constructor(data) {
    this.data = data;
  }

  get anchors() {
    if (!this.data.anchors) return [];

    return this.data.anchors.map((anchor) => new SubscriptionAnchor(anchor, this.frequency));
  }

  get anchorCount() {
    return this.anchors.length;
  }

  get frequency() {
    return new SubscriptionFrequency(this.data.frequency);
  }

  get gid() {
    return this.data.id;
  }

  get id() {
    return this.gid.replace(/^.*\/SubscriptionPlan\//, '');
  }

  get isFixed() {
    return !this.isFlexible;
  }

  get isFlexible() {
    if (this.anchorCount === 0) return true;

    return this.anchors[0].isFlexible;
  }

  get name() {
    return this.data.name;
  }

}
