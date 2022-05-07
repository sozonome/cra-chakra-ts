import { Routes, Route } from 'react-router-dom';

import { routes } from './routes';

const Routings = () => {
  return (
    <Routes>
      {routes.map((routeProps) => (
        <Route {...routeProps} key={routeProps.path as string} />
      ))}
    </Routes>
  );
};

export default Routings;
