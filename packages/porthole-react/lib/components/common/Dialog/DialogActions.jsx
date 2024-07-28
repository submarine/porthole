import React from 'react';

import { Button } from '../Button';
import { InlineStack } from '../InlineStack';

export const DialogActions = ({ actions, ...props }) => {
  return (
    <InlineStack wrap={true}>
      {actions.map(action => {
        return (
          <Button
            key={action.label}
            disabled={action.disabled}
            loading={action.loading}
            onClick={action.onClick}
            variant={action.variant}
            size="micro"
          >
            {action.label}
          </Button>
        )
      })}
    </InlineStack>
  );
};
