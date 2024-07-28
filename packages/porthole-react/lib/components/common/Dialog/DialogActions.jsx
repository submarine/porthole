import React from 'react';

import { Button } from '../Button';
import { useThemedComponent } from '../../../theme';

export const DialogActions = ({ actions, ...props }) => {
  const { className, style } = useThemedComponent('DialogActions');

  return (
    <div className={className} style={style} {...props}>
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
