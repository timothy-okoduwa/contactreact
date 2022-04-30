import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
const PrivateRoute = ({ component: ComponentProps, ...rest }) => {
  const { currentUser } = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={(propsRouter) => {
        return currentUser ? (
          <ComponentProps {...propsRouter} />
        ) : (
          <Redirect to="/SignupPage" />
        );
      }}
    />
  );
};

export default PrivateRoute;
