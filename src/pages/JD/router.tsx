import JDApp from './home';
import ErrorPage from '@components/ErrorPage';
import { RouteObject } from 'react-router-dom';

export const routePrefix = '/jd';

export const routes: RouteObject[] = [
  {
    // path: `${routePrefix}/home`,
    index: true,
    Component: JDApp,
    errorElement: <ErrorPage />,
  },
];
