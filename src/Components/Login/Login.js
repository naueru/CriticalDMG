// React
import React, { useState } from 'react';

// Libraries
import PropTypes from 'prop-types';

// Config
import config from '../../CritCore/Config/config';

// Translations
import getTranslations from '../../CritCore/Translations/Translations.js';

// Styles
import styles from './Login.module.scss';


const Login = ({ onSubmit, errorLabel }) => {
  const [ credentials, setCredentials ] = useState({ userName: '', password: ''});

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setCredentials({
      ...credentials,
      [name]: value
    });
  }

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(credentials)
  }

  const { userName, password } = credentials,
  { language }      = config,
  translations      = getTranslations(language), //ToDo: Replace this language for config directly or from store
  loginTranslations = translations.login,
  userNameLabel     = loginTranslations.userName,
  passwordLabel     = loginTranslations.password,
  submitLabel       = loginTranslations.button;

  return (
    <div className={styles.loginContainer} onClick={e => e.stopPropagation()}>
      <form onSubmit={handleSubmit}>
        { errorLabel && <h3 className={styles.loginError}>{errorLabel}</h3>}
        <h3 className={styles.loginHeadline}>{userNameLabel}</h3>
        <input name="userName" className={styles.logininput} value={userName} onChange={handleChange} />
        <h3 className={styles.loginHeadline}>{passwordLabel}</h3>
        <input name="password" className={styles.logininput} value={password} onChange={handleChange} type="password" />
        <button className={styles.loginBtn} >{submitLabel}</button>
      </form>
      <div>
          <span>
            Test users:
          </span>
          <div>
            <button onClick={() => setCredentials({userName: 'a@b.com', password: '1234'})}>User 1</button>
            <button onClick={() => setCredentials({userName: 'c@d.com', password: '1234'})}>User 2</button>
            <button onClick={() => setCredentials({userName: 'e@f.com', password: '1234'})}>User 3</button>
            <button onClick={() => setCredentials({userName: 'g@h.com', password: '1234'})}>User 4</button>
          </div>
        </div>
    </div>
  );
};

Login.propTypes = {
  onSubmit: PropTypes.func
}

Login.defaultProps = {
  onSubmit: () => {}
}

export default Login;
