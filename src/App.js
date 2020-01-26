// Core
import React from 'react';

// Store
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ActionCreators } from './actions';

// Libraries
import _get from 'lodash/get';

// Components
import Home from './Containers/Home';
import Welcome from './Containers/Welcome';

// Styles
import './App.css';

function App({session}) {
  const { logged } = session;
  return (
    <div className="App">
      {!logged ? <Home /> : <Welcome />}
    </div>
  );
}

const mapStateToProps = state => ({
  // FILTERED PROPS STORE HERE
  session: state.session,
  isAuth: _get(state, 'session.isAuth'),
});

const mapDispatchToProps = (dispatch) => {
  // Filter used actions
  const { checkCredentials } = ActionCreators;
  return bindActionCreators(
    {
      // FILTERED ACTIONS HERE
      checkCredentials,
    },
    dispatch,
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
