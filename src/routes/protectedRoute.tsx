import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { StoreContext } from "store";

export function ProtectedRoute({ children }: { children: JSX.Element }) {
  const {
    session: { isUser },
  } = React.useContext(StoreContext);

  const location = useLocation();

  if (!isUser) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  } else {
    return children;
  }
}
