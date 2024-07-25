import React from 'react';

import { Address, Section, SectionContent, SectionHeader } from '../../../common';

export const SubscriptionDeliverySection = ({ subscription }) => {
  return (
    <Section>
      <SectionHeader
        title="Delivery"
      />
      <SectionContent>
        <Address address={subscription.deliveryMethod.address} />
      </SectionContent>
    </Section>
  );
}
