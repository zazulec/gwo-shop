import React, { FC } from 'react';
import './App.scss';
import { Route, Router } from 'react-router-dom';
import { history } from './helpers/history/history';
import { PrivateRoute } from './component/routing/PrivateRoute';
import { LoginPage } from './pages/LoginPage';
import { MainPage } from './pages/MainPage';

import { connect } from 'react-redux';

interface AppProps {
  user?: any,
}
interface AppState {
  auth: any,
}

export const App: FC<AppProps> = (props) => {
  return (
    <div className="appWrapper">
      <Router history={history}>
        <Route path="/" exact component={LoginPage} />
        <PrivateRoute
          user={props.user}
          path="/mainPage"
          exact
          component={MainPage}
        />
      </Router>

    </div>
  );
}

const mapStateToProps = (state: AppState) => {
  return {
    user: state.auth.user
  }
}

const mapDispatchToProps = () => {
  return {}
}

connect(mapStateToProps, mapDispatchToProps)(App);
