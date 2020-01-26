// React
import React, { Component } from 'react';

// Store
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ActionCreators } from '../../actions';

// Libraries
import _get from 'lodash/get';

// Styles
import styles from './Welcome.module.css';

class Welcome extends Component {
  render = () => {
    return (
      <div className={styles.welcomeContainer}>
        <nav className={styles.loginRegisterContainer}>
          <ul className={styles.loginRegisterList}>
            <li className={styles.loginRegisterItem}>Login</li>
            <span  className={styles.loginRegisterSeparator}>/</span>
            <li className={styles.loginRegisterItem}>Register</li>
          </ul>
        </nav>
        <section className={styles.welcomeWrapper}>
          <div className={styles.welcomeFrame}>
            <div className={styles.logo} />
            <h1 className={styles.headline}>CriticalDMG</h1>
            <p className={styles.description}>The OpenSource table rpg toolkit. Welcome, Login to continue!</p>
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
