import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./app.css";
import navigation from "routes/navigation";
import { ProtectedRoute } from "routes/protectedRoute";
import { StoreContext, store } from "store/index";
import { Provider } from "mobx-react";
import { PublicRoute } from "routes/publicRoute";
// import Layout from "components/layout";

export class App extends Component {
  render() {
    return (
      <Router>
        <StoreContext.Provider value={store}>
          <Provider {...store}>
            <div className="test">
              {/* <Layout></Layout> */}
              <React.Suspense fallback={<div />}>
                <Routes>
                  {navigation.map((route: any, index: any) => {
                    return route.isPublic ? (
                      <Route
                        key={route + index}
                        path={route.path}
                        element={
                          <PublicRoute>
                            <route.component />
                          </PublicRoute>
                        }
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
              </React.Suspense>
            </div>
          </Provider>
        </StoreContext.Provider>
      </Router>
    );
  }
}
