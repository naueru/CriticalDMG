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
    icon: '',
    isPwdMatched: false
  });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    let algo = {};
    console.log('Target', name, value); //Borrar antes de subir (name == repeatPassword && value == repeatPassword){setPayload > password} if?
    if(name === 'repeatPassword'){
      if(value === payload.password){
        algo.isPwdMatched = true;
      }else{
        algo.isPwdMatched = false;
      }
    }
    setPayload({
      ...payload,
      ...algo,
      [name]: value
    });
    console.log('state', payload)
  };

  const handleSubmit = e => {
    e.preventDefault();
    if(payload.isPwdMatched){
      onSubmit(payload);
    }else{
      alert("Revisar contraseña")
    };
  };

  const { email,
    userName,
    password,
    repeatPassword,
    alterEgo,
    isPwdMatched
  } = payload,
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
        <input
          type="email"
          name="email"
          required
          value={email}
          minLength="7"
          maxLength="60"
          title="E-mail address"
          placeholder="E-mail"
          onChange={handleChange}
          className={styles.registerinput}
        />
        <h3 className={styles.registerHeadline}>{userNameLabel}</h3>
        <input
          type="text"
          name="userName"
          required
          value={userName}
          minLength="6"
          maxLength="20"
          title="User Name"
          placeholder="User Name"
          onChange={handleChange}
          className={styles.registerinput}
        />
        <h3 className={styles.registerHeadline}>{passwordLabel}</h3>
        <input
          type="password"
          name="password"
          required
          value={password}
          minLength="4"
          maxLength="30"
          title="7-30 letters & numbers" // Agregar traducciones / sacar &
          placeholder="Password"
          className={styles.registerinput}
          onChange={handleChange}
        />
        <h3 className={styles.registerHeadline}>{repeatPasswordLabel}</h3>
        <input
          type="password"
          name="repeatPassword"
          required
          value={repeatPassword}
          minLength="4"
          maxLength="30"
          title="7-30 letters & numbers" // Agregar traducciones / sacar &
          placeholder="Repeat Password"
          className={isPwdMatched ? styles.registerinput : styles.registerinputError}
          onChange={handleChange}
        />
        <h3 className={styles.registerHeadline}>{alterEgoLabel}</h3>
        <input
          name="alterEgo"
          className={styles.registerinput}
          required
          value={alterEgo}
          placeholder={alterEgoLabel}
          onChange={handleChange}
        />
        <h3 className={styles.registerHeadline}>{iconLabel}</h3>
        <select name="icon" className={styles.registerinput} onChange={handleChange}>
          <option value="warrior">Warrior</option>
          <option value="mage">Mage</option>
        </select>
        <button className={styles.registerBtn}>{submitLabel}</button>
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
