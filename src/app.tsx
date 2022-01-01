import React, { Component, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./app.css";
import navigation from "routes/navigation";
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
              <Routes>
                {navigation.map((route: any, index: any) => {
                  return route.isPublic ? (
                    <Route
                      key={route + index}
                      path={route.path}
                      element={<route.component />}
                    />
                  ) : (
                    <Route
                      key={route + index}
                      path={route.path}
                      element={
                        <ProtectedRoute>
                          <route.component />
                        </ProtectedRoute>
                      }
                    />
                  );
                })}
              </Routes>
            </div>
          </Provider>
        </StoreContext.Provider>
      </Router>
    );
  }
}
