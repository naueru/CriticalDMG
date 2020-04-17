// React
import React, { Component } from 'react';

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

class Welcome extends Component {
  constructor(props){
    super(props)
    this.state = {
      showModal: false,
      showLogin: false,
      showRegister: false
    };
  }

  handleState = (state) => {
    return this.setState(state);
  };

  checkLoginCredentials = ({ userName, password }) => {
    const { checkCredentials } = this.props;
    return checkCredentials({ userName, password });
  };

  registerUser = ({
    email,
    userName,
    alterEgo,
    password,
    icon }) => {
      const { registerUser } = this.props,
      data = { email,
        userName,
        alterEgo,
        password,
        icon };
        console.log(data);
    return registerUser(data);
  };

  render = () => {
    const {
        showModal,
        showLogin,
        showRegister
      }                   = this.state,
      { session = {} }    = this.props,
      error               = session.error || {},
      errorCode           = error.code,
      { language }        = config,
      translations        = getTranslations(language) || {}, //ToDo: Replace this language for config directly or from store
      welcomeTranslations = translations.welcome || {},
      loginLabel          = welcomeTranslations.login,
      registerLabel       = welcomeTranslations.register,
      description         = welcomeTranslations.description,
      errorLabel          = errorCode && welcomeTranslations[errorCode];
    return (
      <div className={styles.welcomeContainer}>
        {showModal && <Modal onClose={() => this.handleState({ showModal: false, showLogin: false, showRegister: false })}>
          {showLogin && <Login
            onSubmit={this.checkLoginCredentials}
            errorLabel={errorLabel}
          />}
          {showRegister && <Register
            onSubmit={this.registerUser}
          />}
        </Modal>}
        <nav className={styles.loginRegisterContainer}>
          <ul className={styles.loginRegisterList}>
            <li className={styles.loginRegisterItem}>
              <button
                className={styles.loginRegisterButton}
                onClick={() => this.handleState({ showLogin: true, showModal: true })}
              >
                {loginLabel}
              </button>
            </li>
            <span  className={styles.loginRegisterSeparator}>/</span>
            <li className={styles.loginRegisterItem}>
              <button
                className={styles.loginRegisterButton}
                onClick={() => this.handleState({ showRegister: true, showModal: true })}
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
  };
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
