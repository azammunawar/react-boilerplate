import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
  RouteComponentProps,
} from "react-router-dom";
import { StoreContext } from "store";

interface IProps {
  path: string;
  Component: React.FC<RouteComponentProps>;
}
export const ProtectedRoute: React.FC<IProps> = ({ path, Component }) => {
  const {
    session: { isUser },
  } = React.useContext(StoreContext);
  return (
    <Route
      exact={true}
      path={path}
      render={(props: RouteComponentProps) =>
        isUser ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/users",
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};
