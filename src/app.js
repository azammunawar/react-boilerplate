import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./app.css";
import navigation from "./routes/navigation";
import { ProtectedRoute } from "./routes/protectedRoute";

import { PublicRoute } from "./routes/publicRoute";

export default function App() {
  return (
    <Router>
      <div className="test">
        {/* <Layout></Layout> */}
        <React.Suspense fallback={<div />}>
          <Routes>
            {navigation.map((route, index) => {
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
    </Router>
  );
}
