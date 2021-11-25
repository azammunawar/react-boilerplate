import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
  RouteComponentProps,
} from "react-router-dom";
interface IProps {
  path: string;
  Component: React.FC<RouteComponentProps>;
}
export const ProtectedRoute: React.FC<IProps> = ({ path, Component }) => {
  let auth = false;
  return (
    <Route
      exact={true}
      path={path}
      render={(props: RouteComponentProps) =>
        auth ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};
