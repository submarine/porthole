import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import {
  PresaleList,
  Skeleton,
  SubscriptionList
} from '@submarine/porthole-react';

const Porthole = () => {
  const router = createBrowserRouter(
    [
      {
        path: "/presales",
        element: <PresaleList />
      },
      {
        path: "/subscriptions",
        element: <SubscriptionList />
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
