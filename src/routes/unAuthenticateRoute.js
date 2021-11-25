export function UnAuthenticRoute({ children, ...rest }) {
    let auth = false;
    return (
      <Route
        {...rest}
        render={({ location }) =>
          !auth.user ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  }