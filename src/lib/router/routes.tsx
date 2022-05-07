import type { PathRouteProps } from 'react-router-dom';

import Page404 from 'lib/pages/404';
import HomePage from 'lib/pages/home';

export const routes: Array<PathRouteProps> = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '*',
    element: <Page404 />,
  },
];
