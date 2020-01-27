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

  checkLoginCredentials = () => {
    const { checkCredentials } = this.props;
    const { userName, password } = this.state;
    return checkCredentials({ userName, password });
  };

  render = () => {
    const {
        showModal,
        showLogin,
        showRegister,
        userName,
        password
      }                   = this.state,
      { language }        = config,
      translations        = getTranslations(language), //ToDo: Replace this language for config directly or from store
      welcomeTranslations = translations.welcome,
      loginLabel          = welcomeTranslations.login,
      registerLabel       = welcomeTranslations.register,
      description         = welcomeTranslations.description;
    return (
      <div className={styles.welcomeContainer}>
        {showModal && <Modal onClose={() => this.handleState({ showModal: false, showLogin: false, showRegister: false })}>
          {showLogin && <Login
            handleChange={this.handleState}
            onSubmit={this.checkLoginCredentials}
            userName={userName}
            pwd={password}
          />}
          {showRegister && <Register />}
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
)(Welcome);
