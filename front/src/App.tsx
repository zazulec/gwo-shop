import React, { FC } from 'react';
import { connect } from 'react-redux';
import { Route, Router } from 'react-router-dom';
import './App.scss';
import { PrivateRoute } from './component/routing/PrivateRoute';
import { history } from './helpers/history/history';
import LoginPage from './pages/loginPage/LoginPage';
import MainPage from './pages/mainPage/MainPage';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ShoppingCartPage } from './pages/shoppingCartPage/ShoppingCartPage';
import ScrollToTop from './helpers/scrollToTop/ScrollToTop';
import { FormPage } from './pages/formPage/FormPage';
import { AppProps, AppState } from './helpers/interfaces/interfaces';




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
          <PrivateRoute
            user={props.user}
            path="/order"
            exact
            component={FormPage}
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
