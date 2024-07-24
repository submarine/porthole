import { Campaign } from './Campaign';
import { Money } from '../common/Money';

export class CrowdfundingCampaign extends Campaign {
  constructor(data, shop) {
    super(data?.node || data, shop);

    this.campaignType = 'CROWDFUND';
    this.cursor = data?.cursor;
    this.isCrowdfund = true;
    this.isPresale = false;
  }

  get canFulfil() {
    if (this.goalStatus !== 'SUCCEEDED') return false;
    if (this.status === 'ENDED' && this.appliedInventoryCount > 0) return true;

    return false;
  }

  get finalGoalProgress() {
    if (this.goalStatusIsPending) return null;

    if (this.goalDefinedOnUnits)
      return Math.round((this.finalTotalUnits / this.goalTotalUnits) * 100);

    return Math.round(
      (parseFloat(this.data.campaignEndTotalValue.amount) /
        parseFloat(this.data.goal.goalTotalValue.amount)) *
        100
    );
  }

  get finalGoalRecorded() {
    return !this.goalStatusIsPending;
  }

  get finalTotalUnits() {
    if (!this.endedAt) return null;
    if (!this.goalDefinedOnUnits) return null;

    return this.data.campaignEndTotalUnits;
  }

  get finalTotalValue() {
    if (!this.endedAt) return null;
    if (!this.goalDefinedOnValue) return null;

    return new Money(this.data.campaignEndTotalValue);
  }

  get goalDefinedOnUnits() {
    return this.goalType === 'TOTAL_UNITS';
  }

  get goalDefinedOnValue() {
    return this.goalType === 'TOTAL_VALUE';
  }

  get goalDescription() {
    if (this.goalDefinedOnUnits) return pluralize('unit', this.data.goal.goalTotalUnits, true);

    if (this.goalDefinedOnValue) return this.shop.formatMoney(this.data.goal.goalTotalValue);

    return '';
  }

  get goalStatusIsPending() {
    return this.goalStatus === 'PENDING';
  }

  get goalProgress() {
    return Math.round(this.data.goalProgress);
  }

  get goalStatus() {
    return this.data.goalStatus;
  }

  get goalTotalUnits() {
    if (!this.data.goal.goalTotalUnits) return null;

    return this.data.goal.goalTotalUnits;
  }

  get goalTotalValue() {
    if (!this.data.goal.goalTotalValue) return null;

    return new Money(this.data.goal.goalTotalValue);
  }

  get goalType() {
    return this.data.goal.goalType;
  }

  get pledgedAmountDescription() {
    if (this.goalDefinedOnUnits) return pluralize('unit', this.runningTotalUnits, true);

    if (this.goalDefinedOnValue) return this.shop.formatMoney(this.runningTotalValue);

    return '';
  }

  get runningTotalUnits() {
    if (!this.goalDefinedOnUnits) return null;

    return this.data.campaignRunningTotalUnits;
  }

  get runningTotalValue() {
    if (!this.goalDefinedOnValue) return null;

    return new Money(this.data.campaignRunningTotalValue);
  }
}
