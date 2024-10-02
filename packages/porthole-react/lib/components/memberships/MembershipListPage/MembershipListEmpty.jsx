import React from 'react';

import { Banner } from '../../common/index.js';

export const MembershipListEmpty = () => {
  return (
    <div className="flex min-h-[220px] items-center justify-center rounded border border-grey-400 md:min-h-[236px]">
      <div className="text-center">
        <span className="text-sm">No memberships</span>
      </div>
    </div>
  )
}
