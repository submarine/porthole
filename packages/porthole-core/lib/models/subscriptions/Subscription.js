import { PaymentMethod } from '../common/PaymentMethod';
import { SubscriptionAnchor } from './SubscriptionAnchor';
import { SubscriptionDeliveryMethod } from "./SubscriptionDeliveryMethod";
import { SubscriptionEvent } from "./SubscriptionEvent";
import { SubscriptionLine } from "./SubscriptionLine";
import { SubscriptionOrder } from './SubscriptionOrder';
import { SubscriptionPlan } from './SubscriptionPlan';

export class Subscription {

  constructor(data) {
    this.cursor = data?.cursor;
    this.data = data?.node || data;
  }

  get availableSubscriptionPlans() {
    if (!this.data.availableSubscriptionPlans) return [];

    return this.data.availableSubscriptionPlans.map((plan) => new SubscriptionPlan(plan));
  }

  get cancelAt() {
    return this.data.cancelAt;
  }

  get cancelledAt() {
    return this.cancelEvent?.createdAt;
  }

  get cancelEvent() {
    if (!this.data.cancelEvent) return null;

    return new SubscriptionEvent(this.data.cancelEvent);
  }

  get canCancel() {
    if (this.isCancelled) return false;

    return true;
  }

  get canPause() {
    return this.isActive;
  }

  get canResume() {
    return this.isPaused;
  }

  get canRevertScheduledCancellation() {
    return this.isPendingCancellation;
  }

  get canUpdatePaymentMethod() {
    if (this.isCancelled) return false;
    if (this.isExpired) return false;

    return true;
  }

  get deliveryMethod() {
    if (!this.data.deliveryMethod) return null;

    return new SubscriptionDeliveryMethod(this.data.deliveryMethod);
  }

  get externalId() {
    return this.data.externalId;
  }

  get gid() {
    return this.data.id;
  }

  get id() {
    return this.gid.replace(/^.*\/Subscription\//, '');
  }

  get identifier() {
    return this.data.identifier;
  }

  get imageUrls() {
    return this.lines.map((line) => line.imageUrl);
  }

  get isActive() {
    return this.status === 'ACTIVE';
  }

  get isCancelled() {
    return this.status === 'CANCELLED';
  }

  get isExpired() {
    return this.status === 'EXPIRED';
  }

  get isFailed() {
    return this.status === 'FAILED';
  }

  get isPaused() {
    return this.status === 'PAUSED';
  }

  get isPendingCancellation() {
    return !!this.data.pendingCancellation;
  }

  get isStale() {
    return this.status === 'STALE';
  }

  get lines() {
    return this.data.lines.map((line) => new SubscriptionLine(line));
  }

  get nextBillingAt() {
    return this.data.nextBillingAt;
  }

  get nextDeliveryAt() {
    return this.data.nextDeliveryAt;
  }

  get nextScheduledOrder() {
    if (!this.data.nextScheduledOrder) return null;

    return new SubscriptionOrder(this.data.nextScheduledOrder);
  }

  get pausedAt() {
    return this.pauseEvent?.createdAt;
  }

  get pauseEvent() {
    if (!this.data.pauseEvent) return null;

    return new SubscriptionEvent(this.data.pauseEvent);
  }

  get paymentMethod() {
    return new PaymentMethod(this.data.paymentMethod);
  }

  get status() {
    return this.data.status;
  }

  get subscriptionAnchor() {
    return new SubscriptionAnchor(this.data.subscriptionAnchor);
  }

  get subscriptionPlan() {
    return new SubscriptionPlan(this.data.subscriptionPlan);
  }

}
