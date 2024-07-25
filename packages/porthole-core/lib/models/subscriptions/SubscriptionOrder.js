// eslint-disable-next-line import/no-cycle
import { Money } from '../common';
import { Subscription } from './Subscription';
import { SubscriptionDeliveryMethod } from './SubscriptionDeliveryMethod';
import { SubscriptionOrderLine } from './SubscriptionOrderLine';
import { SubscriptionPlan } from './SubscriptionPlan';

export class SubscriptionOrder {

  constructor(data) {
    this.cursor = data?.cursor;
    this.data = data?.node || data;
  }

  get canProcess() {
    if (!this.isScheduled) return false;
    if (this.isPaused) return false;
    if (this.isSkipped) return false;
    if (this.paymentStatus === 'SUCCEEDED') return false;

    if (this.lastProcessedOrder) {
      if (this.lastProcessedOrder.cycleIndex !== this.cycleIndex - 1) return false;
    } else if (this.cycleIndex > 1) return false;

    return true;
  }

  get cancelledAt() {
    return this.data.cancelledAt;
  }

  get createdAt() {
    return this.data.createdAt;
  }

  get currency() {
    return this.data.subscription.currency;
  }

  get customer() {
    return new Customer(this.data.customer);
  }

  get cycleIndex() {
    return this.data.cycleIndex;
  }

  get deliveryBehaviour() {
    return new SubscriptionDeliveryBehaviour(this.data.deliveryBehaviour);
  }

  get deliveryMethod() {
    if (!this.data.deliveryMethod) return null;

    return new SubscriptionDeliveryMethod(this.data.deliveryMethod);
  }

  get expectedBillingAt() {
    return this.data.expectedBillingAt;
  }

  get expectedDeliveryAt() {
    return this.data.expectedDeliveryAt;
  }

  get gid() {
    return this.data.id;
  }

  get id() {
    return this.gid.replace(/^.*\/SubscriptionOrder\//, '');
  }

  get identifier() {
    return this.data.identifier;
  }

  get imageUrls() {
    return this.lines.map((line) => line.imageUrl);
  }

  get isCancelled() {
    return this.data.status === 'CANCELLED';
  }

  get isOverdue() {
    return Date.now() > Date.parse(this.expectedBillingAt);
  }

  get isPaused() {
    return this.data.paused;
  }

  get isProcessed() {
    return this.data.status === 'PROCESSED';
  }

  get isScheduled() {
    return this.data.status === 'SCHEDULED';
  }

  get isSkipped() {
    return this.data.skipped;
  }

  get itemCount() {
    return this.lines.reduce((acc, line) => acc + line.quantity, 0);
  }

  get lastPaymentMethodUpdateEvent() {
    if (!this.data.lastPaymentMethodUpdateEvent) return null;

    return new SubscriptionEvent(this.data.lastPaymentMethodUpdateEvent);
  }

  get lastProcessedOrder() {
    if (!this.data.subscription.lastProcessedOrder) return null;

    return new SubscriptionOrder(this.data.subscription.lastProcessedOrder);
  }

  get lineCount() {
    return this.lines.length;
  }

  get lines() {
    return this.data.lines
      .map((line) => new SubscriptionOrderLine(line))
      .sort((a, b) => a.productVariant.id - b.productVariant.id);
  }

  get nextSubscriptionOrder() {
    if (!this.data.nextSubscriptionOrder) return null;

    return new SubscriptionOrder(this.data.nextSubscriptionOrder);
  }

  get order() {
    if (!this.data.order) return null;

    return new Order(this.data.order);
  }

  get paymentIntent() {
    return new PaymentIntent(this.data.paymentIntent);
  }

  get paymentMethod() {
    return new PaymentMethod(this.data.paymentMethod);
  }

  get paymentStatus() {
    if (this.status === 'SCHEDULED' && this.data.paymentStatus === 'FAILED') return 'FAILING';

    return this.data.paymentStatus;
  }

  get previousSubscriptionOrder() {
    if (!this.data.previousSubscriptionOrder) return null;

    return new SubscriptionOrder(this.data.previousSubscriptionOrder);
  }

  get pricingBehaviour() {
    return new SubscriptionPricingBehaviour(this.data.subscription.pricingBehaviour);
  }

  get processedAt() {
    return this.data.processedAt;
  }

  get skippedAt() {
    return this.data.skippedAt;
  }

  get status() {
    return this.data.status;
  }

  get subscription() {
    return new Subscription(this.data.subscription);
  }

  get subscriptionPlan() {
    return new SubscriptionPlan(this.data.subscription.subscriptionPlan);
  }

  get subscriptionPlanGroup() {
    return new SubscriptionPlanGroup(this.data.subscription.subscriptionPlan.subscriptionPlanGroup);
  }

  get subtotal() {
    return new Money(this.data.financials.subtotal);
  }

  get taxBehaviour() {
    return this.data.financials.tax.behaviour;
  }

  get taxBehaviourHuman() {
    if (this.taxBehaviour === 'INCLUSIVE') return 'Included';

    return '';
  }

  get taxesIncluded() {
    return this.taxBehaviour === 'INCLUSIVE';
  }

  get totalPrice() {
    return new Money(this.data.financials.totalPrice);
  }

  get totalShipping() {
    return new Money(this.data.financials.shipping.total);
  }

  get totalTax() {
    return new Money(this.data.financials.tax.total);
  }
}
