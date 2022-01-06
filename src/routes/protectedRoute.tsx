import { autorun } from "mobx";
import React from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { StoreContext } from "store";

export function ProtectedRoute({ children }: { children: JSX.Element }) {
  const {
    session: { isUser, user },
  } = React.useContext(StoreContext);

  let navigate = useNavigate();
  let location = useLocation();

  if (!isUser) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  } else {
    return children;
  }
}
