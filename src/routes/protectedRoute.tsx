import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { StoreContext } from "store";

export function ProtectedRoute({ children }: { children: JSX.Element }) {
  const {
    session: { isUser },
  } = React.useContext(StoreContext);
  let location = useLocation();

  if (!isUser) {
    return <Navigate to="/users" state={{ from: location }} replace />;
  }

  return children;
}
