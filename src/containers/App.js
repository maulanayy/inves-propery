import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { routes } from "../config";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          {routes.map((route) => {
            if (route.path === "/") {
              return (
                <Route
                  path={route.path}
                  component={route.component}
                  key={route.path}
                  exact
                />
              );
            } else {
              return (
                <Route
                  path={route.path}
                  component={route.component}
                  key={route.path}
                />
              );
            }
          })}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
