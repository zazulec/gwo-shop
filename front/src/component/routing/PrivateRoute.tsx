import React, { ComponentState, FC } from "react";
import { connect } from "react-redux";
import { Redirect, Route } from "react-router-dom";

interface RouteState {
  auth: {
    user?: any
  },
}
interface PrivateRouteProps {
  path: any,
  user?: any,
  auth?: any,
  component: ComponentState,
  exact: boolean,
}

export const PrivateRoute: FC<PrivateRouteProps> = ({ component: Component, user, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        !user ? (
          <Redirect
            to={{ pathname: "/", state: { from: props.location } }}
            {...rest}
          />
        ) : (
            <Component {...props} />
          )
      }
    />
  );
}

const mapStateToProps = (state: RouteState) => ({
  user: state.auth.user,
});

export default connect(mapStateToProps)(PrivateRoute);
