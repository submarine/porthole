import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import {
  MembershipDetailPage,
  MembershipListPage,
  PresaleList,
  Skeleton,
  SubscriptionDetailPage,
  SubscriptionListPage
} from '@submarine/porthole-react';

const Porthole = () => {
  const router = createBrowserRouter(
    [
      {
        path: "/memberships",
        element: <MembershipListPage />
      },
      {
        path: "/memberships/:id",
        element: <MembershipDetailPage />
      },
      {
        path: "/presales",
        element: <PresaleList />
      },
      {
        path: "/subscriptions",
        element: <SubscriptionListPage />
      },
      {
        path: "/subscriptions/:id",
        element: <SubscriptionDetailPage />
      }
    ], {
      basename: "/apps/platform/portal"
    }
  );

  return (
    <RouterProvider router={router}>
      <Skeleton />
    </RouterProvider>
  );
};

export default Porthole;
