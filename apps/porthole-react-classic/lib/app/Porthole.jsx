import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import {
  PresaleList as DefaultPresaleList,
  Skeleton as DefaultSkeleton,
  useThemedComponents
} from '@submarine/porthole-react';

const Porthole = () => {
  const {
    PresaleList: { component: PresaleList, props: presaleListProps },
    Skeleton: { component: Skeleton, props: skeletonProps }
  } = useThemedComponents({
    PresaleList: (
      <DefaultPresaleList />
    ),
    Skeleton: (
      <DefaultSkeleton />
    )
  });

  const router = createBrowserRouter(
    [
      {
        path: "/presales",
        element: <PresaleList {...presaleListProps} />
      }
    ], {
      basename: "/apps/platform"
    }
  );

  return (
    <RouterProvider router={router}>
      <Skeleton {...skeletonProps} />
    </RouterProvider>
  );
};

export default Porthole;
