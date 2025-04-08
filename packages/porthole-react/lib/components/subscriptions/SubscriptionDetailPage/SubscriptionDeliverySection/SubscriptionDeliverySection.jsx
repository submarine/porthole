import React from 'react';

import { Address, Section, SectionContent, SectionHeader } from '../../../common';

export const SubscriptionDeliverySection = ({ subscription }) => {
  return (
    <Section>
      <SectionHeader
        title="Delivery"
      />
      <SectionContent>
        {subscription.deliveryMethod?.address ? (
          <Address address={subscription.deliveryMethod.address} />
        ) : (
          <p>No address.</p>
        )}
      </SectionContent>
    </Section>
  );
}
