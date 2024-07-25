import React from 'react';

import { Button } from '../Button';

export const DialogActions = ({ actions, ...props }) => {
  return (
    <div {...props}>
      {actions.map(action => {
        return (
          <Button
            key={action.label}
            disabled={action.disabled}
            loading={action.loading}
            onClick={action.onClick}
          >
            {action.label}
          </Button>
        )
      })}
    </div>
  );
};
