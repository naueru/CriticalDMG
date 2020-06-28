// Core
import React, { useEffect } from 'react';

// Store
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from './actions';

// Router
import { Switch, Route } from 'react-router-dom';

// Libraries
import _get from 'lodash/get';

// Components
import Home from './Containers/Home';
import Welcome from './Containers/Welcome';
import AboutUs from './Components/AboutUs';
import NotFound from './Components/NotFound';
import LoadingCurtain from './Components/LoadingCurtain';

// Styles
import './App.css';


function App({ isAuth, user, fetchLoggedUser }) {
  const noUserInRedux = !user;
  useEffect(() => {

    if(isAuth && noUserInRedux) {
      fetchLoggedUser();
    }
  });

  const loggedInContent = noUserInRedux ? <LoadingCurtain /> : <Home />;

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={() => (isAuth ? loggedInContent : <Welcome />)} />
        <Route exact path="/about-us" component={AboutUs} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  // Filter used actions
  const { fetchLoggedUser } = ActionCreators;
  return bindActionCreators(
    {
      // FILTERED ACTIONS HERE
      fetchLoggedUser,
    },
    dispatch,
  );
};

const mapStateToProps = state => ({
  // FILTERED PROPS STORE HERE
  isAuth: _get(state, 'session.isAuth'),
  user:   _get(state, 'session.user'),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);


