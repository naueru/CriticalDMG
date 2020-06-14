// React
import React, { useState } from 'react';

// Store
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ActionCreators } from '../../actions';

// Libraries
import _get from 'lodash/get';

// Config
import config from '../../CritCore/Config/config';

// Translations
import getTranslations from '../../CritCore/Translations/Translations.js';

// Components
import Modal from '../../Components/Modal';
import Login from '../../Components/Login';
import Register from '../../Components/Register';

// Styles
import styles from './Welcome.module.css';

const Welcome = ({ checkCredentials, registerUser, session = {} }) => {
  const [ state, setState ] = useState({
    showModal: false,
    showLogin: false,
    showRegister: false
  });

  const handleState = (state) => {
    return setState(state);
  };

  const checkLoginCredentials = ({ userName, password }) => {
    return checkCredentials({ userName, password });
  };

  const handleRegisterUser = ({
    email,
    userName,
    alterEgo,
    password,
    icon }) => {
      const data = {
        email,
        userName,
        alterEgo,
        password,
        icon
      };
    return registerUser(data);
  };

  const {
      showModal,
      showLogin,
      showRegister
    }                   = state,
    error               = session.error || {},
    errorData           = error.data || {},
    errorCode           = errorData.internalError || error.code,
    { language }        = config,
    translations        = getTranslations(language) || {}, //ToDo: Replace this language for config directly or from store
    welcomeTranslations = translations.welcome || {},
    loginLabel          = welcomeTranslations.login,
    registerLabel       = welcomeTranslations.register,
    description         = welcomeTranslations.description,
    errorGenericMsg     = error.message,
    errorMsg            = _get(error, 'errors[0].message', errorGenericMsg),
    errorLabel          = (errorCode && welcomeTranslations[errorCode]) || errorMsg;
  return (
    <div className={styles.welcomeContainer}>
      {showModal && <Modal onClose={() => handleState({ showModal: false, showLogin: false, showRegister: false })}>
        {showLogin && <Login
          onSubmit={checkLoginCredentials}
          errorLabel={errorLabel}
        />}
        {showRegister && <Register
          onSubmit={handleRegisterUser}
          errorLabel={errorLabel}
        />}
      </Modal>}
      <nav className={styles.loginRegisterContainer}>
        <ul className={styles.loginRegisterList}>
          <li className={styles.loginRegisterItem}>
            <button
              className={styles.loginRegisterButton}
              onClick={() => handleState({ showLogin: true, showModal: true })}
            >
              {loginLabel}
            </button>
          </li>
          <span  className={styles.loginRegisterSeparator}>/</span>
          <li className={styles.loginRegisterItem}>
            <button
              className={styles.loginRegisterButton}
              onClick={() => handleState({ showRegister: true, showModal: true })}
            >
              {registerLabel}
            </button>
          </li>
        </ul>
      </nav>
      <section className={styles.welcomeWrapper}>
        <div className={styles.welcomeFrame}>
          <div className={styles.logo} />
          <h1 className={styles.headline}>CriticalDMG</h1>
          <p className={styles.description}>{description}</p>
        </div>
      </section>
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
  const { checkCredentials, registerUser } = ActionCreators;
  return bindActionCreators(
    {
      // FILTERED ACTIONS HERE
      checkCredentials,
      registerUser
    },
    dispatch,
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Welcome);
