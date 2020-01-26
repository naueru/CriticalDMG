// Core
import React from 'react';

// Store
import { connect } from 'react-redux';

// Libraries
import _get from 'lodash/get';

// Components
import Home from './Containers/Home';
import Welcome from './Containers/Welcome';

// Styles
import './App.css';

function App({isAuth}) {
  return (
    <div className="App">
      {isAuth ? <Home /> : <Welcome />}
    </div>
  );
}

const mapStateToProps = state => ({
  // FILTERED PROPS STORE HERE
  isAuth: _get(state, 'session.isAuth'),
});

export default connect(
  mapStateToProps,
  null,
)(App);
