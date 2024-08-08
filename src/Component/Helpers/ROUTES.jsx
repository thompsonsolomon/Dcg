import React from "react";
import { Route } from "react-router-dom";
import { Redirect } from "react-router-dom/cjs/react-router-dom";

export function IsUserRedirect({ user, loggedInPath, children, ...rest }) {
  // if (window.location.pathname.includes("Dashboard")) {
  //   alert("Trying to reach the dashboard?");
  // }

  console.log(user);
  return (
    <Route
      {...rest}
      render={() => {
        if (!user) {
          return children;
        }
        if (user) {
          return (
            <Redirect
              to={{
                pathname: loggedInPath,
                // state: { from: location },
              }}
            />
          );
        }
        return null;
      }}
    />
  );
}

export function ProtectedRoute({ user, children, ...rest }) {
  console.log(user);
  return (
    <Route
      {...rest}
      render={({ location }) => {
        if (user) {
          return children;
        }
        if (!user) {
          return (
            <Redirect
              to={{
                pathname: "/Home",
                state: { from: location },
              }}
            />
          );
        }
        return null;
      }}
    />
  );
}
