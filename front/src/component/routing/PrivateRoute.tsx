import React, { FC, ComponentType, ComponentState } from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

interface RouteState {
  auth: {
    user?: any;
    // path: string;
    // exact: true;
    // component: () => Element;
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
