import { autorun } from "mobx";
import React from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { StoreContext } from "store";

export function PublicRoute({ children }: { children: JSX.Element }) {
  const {
    session: { isUser, user },
  } = React.useContext(StoreContext);
  let location = useLocation();

  if (isUser) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return children;
}
