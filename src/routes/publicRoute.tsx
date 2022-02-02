import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { StoreContext } from "store";

export function PublicRoute({ children }: { children: JSX.Element }) {
  const {
    session: { isUser },
  } = React.useContext(StoreContext);
  const location = useLocation();

  if (isUser) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return children;
}
