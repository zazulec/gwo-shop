import React, { FC } from 'react';
import { connect } from 'react-redux';
import { Route, Router } from 'react-router-dom';
import './App.scss';
import { PrivateRoute } from './component/routing/PrivateRoute';
import { history } from './helpers/history/history';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ShoppingCartPage } from './pages/ShoppingCartPage';
import ScrollToTop from './helpers/scrollToTop/ScrollToTop';


interface AppProps {
  user?: any,
}
interface AppState {
  auth: any,
}

const App: FC<AppProps> = (props) => {
  return (
    <div className="appWrapper">
      <Router history={history}>
        <ScrollToTop>
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss={false}
            draggable
            pauseOnHover
          />
          <Route
            path="/"
            exact
            component={LoginPage}
          />
          <PrivateRoute
            user={props.user}
            path="/mainPage"
            exact
            component={MainPage}
          />
          <PrivateRoute
            user={props.user}
            path="/shoppingCart"
            exact
            component={ShoppingCartPage}
          />
        </ScrollToTop>
      </Router>
    </div>
  );
}

const mapStateToProps = (state: AppState) => {
  return {
    user: state.auth.user
  }
}

export default connect(mapStateToProps, null)(App);
