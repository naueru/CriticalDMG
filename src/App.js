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


function App({ isAuth, user, fetchLoggedUser, updateLocaleSetting }) {
  const noUserInRedux = !user;
  useEffect(() => {

    if(isAuth && noUserInRedux) {
      fetchLoggedUser();
    }
  });

  useEffect(() => {
    const values = window.location.search;
    const urlParams = new URLSearchParams(values);
    const lang = urlParams?.get('lang');

    const navLang = lang || navigator?.language || 'en-US';
    const locale = {
      locale: navLang,
      lang: navLang?.split?.('-')?.[0]?.toLowerCase?.(),
      countryIso2: navLang?.split?.('-')?.[1]?.toUpperCase?.(),
    };
    updateLocaleSetting(locale);
  });

  const loggedInContent = noUserInRedux ? <LoadingCurtain /> : <Home />;

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={() => (isAuth ? loggedInContent : <Welcome />)} />
        <Route exact path="/about-us" render={() => <AboutUs />} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  // Filter used actions
  const { fetchLoggedUser, updateLocaleSetting } = ActionCreators;
  return bindActionCreators(
    {
      // FILTERED ACTIONS HERE
      fetchLoggedUser,
      updateLocaleSetting,
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


