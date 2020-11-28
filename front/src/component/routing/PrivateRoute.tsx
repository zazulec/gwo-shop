import React, { FC } from "react";
import { connect } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import { PrivateRouteProps, RouteState } from "../../helpers/interfaces/interfaces";



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
