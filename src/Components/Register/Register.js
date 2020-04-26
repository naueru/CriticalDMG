// React
import React, { useState } from 'react';

// Libraries
import PropTypes from 'prop-types';

// Config
import config from '../../CritCore/Config/config';

// Translations
import getTranslations from '../../CritCore/Translations/Translations.js';

// Styles
import styles from './Register.module.scss';


const Register = ({ onSubmit, errorLabel }) => {
  const [ payload, setPayload ] = useState({
    email: '',
    userName: '',
    password: '',
    repeatPassword: '',
    alterEgo: '',
    icon: '' });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setPayload({
      ...payload,
      [name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(payload);
  };

  const { email,
    userName,
    password,
    repeatPassword,
    alterEgo } = payload,
  { language }          = config,
  translations          = getTranslations(language), //ToDo: Replace this language for config directly or from store
  registerTranslations  = translations.register,
  titleLabel            = registerTranslations.title,
  emailLabel            = registerTranslations.email,
  userNameLabel         = registerTranslations.userName,
  passwordLabel         = registerTranslations.password,
  repeatPasswordLabel   = registerTranslations.repeatPassword,
  alterEgoLabel         = registerTranslations.alterEgo,
  iconLabel             = registerTranslations.icon,
  submitLabel           = registerTranslations.submit;

  return (
    <div className={styles.registerContainer} onClick={e => e.stopPropagation()}>
      <h2 className={styles.registerTitle}>{titleLabel}</h2>
      <form onSubmit={handleSubmit} className={styles.registerForm}>
        { errorLabel && <h3 className={styles.registerError}>{errorLabel}</h3>}
        <h3 className={styles.registerHeadline}>{emailLabel}</h3>
        <input name="email" className={styles.registerinput} value={email} onChange={handleChange} />
        <h3 className={styles.registerHeadline}>{userNameLabel}</h3>
        <input name="userName" className={styles.registerinput} value={userName} onChange={handleChange} />
        <h3 className={styles.registerHeadline}>{passwordLabel}</h3>
        <input name="password" className={styles.registerinput} value={password} onChange={handleChange} type="password" />
        <h3 className={styles.registerHeadline}>{repeatPasswordLabel}</h3>
        <input name="repeatPassword" className={styles.registerinput} value={repeatPassword} onChange={handleChange} type="password" />
        <h3 className={styles.registerHeadline}>{alterEgoLabel}</h3>
        <input name="alterEgo" className={styles.registerinput} value={alterEgo} onChange={handleChange} />
        <h3 className={styles.registerHeadline}>{iconLabel}</h3>
        <select name="icon" className={styles.registerinput} onChange={handleChange}>
          <option value="warrior">Warrior</option>
          <option value="mage">Mage</option>
        </select>
        <button className={styles.registerBtn} >{submitLabel}</button>
      </form>
    </div>
  );
};

Register.propTypes = {
  onSubmit: PropTypes.func
};

Register.defaultProps = {
  onSubmit: () => {}
};

export default Register;
