import React from 'react';
import './App.scss';
import { LoginPage } from './pages/LoginPage';

import { connect } from 'react-redux';

export const App = () => {
  return (
    <div className="appWrapper">
      <LoginPage />
    </div>
  );
}

const mapStateToProps = () => {
  return {}
}

const mapDispatchToProps = () => {
  return {}
}

connect(mapStateToProps, mapDispatchToProps)(App);
