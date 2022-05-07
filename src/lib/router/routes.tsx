import type { PathRouteProps } from 'react-router-dom';

import HomePage from 'lib/pages/home';

export const routes: Array<PathRouteProps> = [
  {
    path: '/',
    element: <HomePage />,
  },
];
