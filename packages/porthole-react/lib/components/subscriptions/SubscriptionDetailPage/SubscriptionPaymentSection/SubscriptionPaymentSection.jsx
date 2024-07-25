import React from 'react';

import { PaymentMethod, Section, SectionContent, SectionHeader } from '../../../common';
import { UpdatePaymentMethod } from './UpdatePaymentMethod';

export const SubscriptionPaymentSection = ({ subscription }) => {
  return (
    <Section>
      <SectionHeader
        title="Payment"
      />
      <SectionContent>
        <PaymentMethod paymentMethod={subscription.paymentMethod} />
        <UpdatePaymentMethod paymentMethod={subscription.paymentMethod} />
      </SectionContent>
    </Section>
  );
}
