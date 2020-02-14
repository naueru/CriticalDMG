// React
import React, { Component } from 'react';

// Libraries
import PropTypes from 'prop-types';

// Config
import config from '../../CritCore/Config/config';

// Translations
import getTranslations from '../../CritCore/Translations/Translations.js';

// Styles
import styles from './Login.module.scss';

class Login extends Component {
  static propTypes = {
    userName: PropTypes.string,
    pwd: PropTypes.string,
    handleChange: PropTypes.func,
    onSubmit: PropTypes.func
  }

  static defaultProps = {
    userName: '',
    pwd: '',
    handleChange: () => {},
    onSubmit: () => {}
  }

  render = () => {
    const { userName, pwd, handleChange, onSubmit } = this.props,
      { language }      = config,
      translations      = getTranslations(language), //ToDo: Replace this language for config directly or from store
      loginTranslations = translations.login,
      userNameLabel     = loginTranslations.userName,
      passwordLabel     = loginTranslations.password,
      submitLabel       = loginTranslations.button;
    return (
      <div className={styles.loginContainer} onClick={e => e.stopPropagation()}>
        <h3 className={styles.loginHeadline}>{userNameLabel}</h3>
        <input className={styles.logininput} defaultValue={userName} onChange={e => handleChange({userName: e.target.value})} />
        <h3 className={styles.loginHeadline}>{passwordLabel}</h3>
        <input className={styles.logininput} defaultValue={pwd} onChange={e => handleChange({password: e.target.value})} type="password" />
        <button className={styles.loginBtn} onClick={onSubmit}>{submitLabel}</button>
        <div>
          <span>
            Test users:
          </span>
          <div>
            <button onClick={() => handleChange({userName: 'valdamir', password: '1234'})}>User 1</button>
            <button onClick={() => handleChange({userName: 'meriadoc', password: '1234'})}>User 2</button>
            <button onClick={() => handleChange({userName: 'dilfo', password: '1234'})}>User 3</button>
            <button onClick={() => handleChange({userName: 'yvaine', password: '1234'})}>User 4</button>
          </div>
        </div>
      </div>
    );
  };
};

export default Login;
