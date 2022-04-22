import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { routes } from "lib/routes";

const App = () => {
  return (
    <Router>
      <Routes>
        {routes.map((routeProps) => (
          <Route {...routeProps} key={routeProps.path as string} />
        ))}
      </Routes>
    </Router>
  );
};

export default App;
