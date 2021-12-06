import React, { Component, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./app.css";
import routes from "routes/navigation";
import { ProtectedRoute } from "routes/protectedRoute";
import { StoreContext, store } from "store/index";
import { Provider } from "mobx-react";

export class App extends Component {
  render() {
    return (
      <Router>
        <StoreContext.Provider value={store}>
          <Provider {...store}>
            <div className="test">
              <nav>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <Link to="/users">Users</Link>
                  </li>
                </ul>
              </nav>
              <Switch>
                {routes.map((route: any, index: any) => {
                  return route.isPublic ? (
                    <Route
                      key={route + index}
                      path={route.path}
                      component={route.component}
                    />
                  ) : (
                    <ProtectedRoute
                      key={route + index}
                      path={route.path}
                      Component={route.component}
                    />
                  );
                })}
              </Switch>
            </div>
          </Provider>
        </StoreContext.Provider>
      </Router>
    );
  }
}
