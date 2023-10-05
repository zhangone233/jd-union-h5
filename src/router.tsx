import { createBrowserRouter } from 'react-router-dom';
import ErrorBoundary from '@components/ErrorBoundary';

import { routes as JDRoutes, routePrefix } from '@pages/JD/router';

export const routers = createBrowserRouter(
  [
    {
      path: routePrefix,
      children: JDRoutes,
      ErrorBoundary,
      // errorElement: <ErrorBoundary />,
    },
  ],
  {
    basename: '/',
  },
);
