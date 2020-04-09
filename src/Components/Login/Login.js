// React
import React from 'react';

// Libraries
import PropTypes from 'prop-types';

// Config
import config from '../../CritCore/Config/config';

// Translations
import getTranslations from '../../CritCore/Translations/Translations.js';

// Styles
import styles from './Login.module.scss';

const Login = ({ userName, pwd, handleChange, onSubmit, errorLabel }) => {
  const { language }  = config,
  translations        = getTranslations(language), //ToDo: Replace this language for config directly or from store
  loginTranslations   = translations.login,
  userNameLabel       = loginTranslations.userName,
  passwordLabel       = loginTranslations.password,
  submitLabel         = loginTranslations.button;
  return (
    <div className={styles.loginContainer} onClick={e => e.stopPropagation()}>
      { errorLabel && <h3 className={styles.loginError}>{errorLabel}</h3>}
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
          <button onClick={() => handleChange({userName: 'a@b.com', password: '1234'})}>User 1</button>
          <button onClick={() => handleChange({userName: 'c@d.com', password: '1234'})}>User 2</button>
          <button onClick={() => handleChange({userName: 'e@f.com', password: '1234'})}>User 3</button>
          <button onClick={() => handleChange({userName: 'g@h.com', password: '1234'})}>User 4</button>
        </div>
      </div>
    </div>
  );
};

Login.propTypes = {
  userName: PropTypes.string,
  pwd: PropTypes.string,
  handleChange: PropTypes.func,
  onSubmit: PropTypes.func
}

Login.defaultProps = {
  userName: '',
  pwd: '',
  handleChange: () => {},
  onSubmit: () => {}
}

export default Login;
