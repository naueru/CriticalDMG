// React
import React, { useState } from 'react';

// Libraries
import PropTypes from 'prop-types';

// Config
import config from '../../CritCore/Config/config';
import registerValidator from './registerValidations';

// Constants
import { icons } from '../../constants/globalConstants';

// Components
import InputWithError from '../Form/InputWithError';

// Styles
import styles from './Register.module.scss';

const Register = ({ onSubmit, errorLabel, translations }) => {
  const registerValidators = registerValidator({translations});

  const INITIAL_PAYLOAD = {
    email: '',
    userName: '',
    password: '',
    repeatPassword: '',
    alterEgo: '',
    icon: icons?.[0]?.name,
  };

  const [ payload, setPayload ] = useState(INITIAL_PAYLOAD);

  const INITIAL_ERRORS = {
    email: null,
    userName: null,
    password: null,
    repeatPassword: null,
    alterEgo: null,
    isPwdMatched: null,
  };

  const [ fieldsErrors, setFieldsErrors ] = useState(INITIAL_ERRORS);

  const validateField = (fields, value) => {
    let result = {...fieldsErrors};
    const validate = ({name, value, password, repeatPassword}) => {
        return registerValidators?.[name]?.({ value, password, repeatPassword });
    };

    switch (typeof fields) {

      case "object":
        for (let field in fields) {
          result[field] = validate({ value: payload[field], password: payload?.password, repeatPassword: payload?.repeatPassword, name: field })
        }
        break;

      case "string":
        if (fields === 'password') {
          result.isPwdMatched = validate({ repeatPassword: payload?.repeatPassword, password: value, name: 'isPwdMatched' });
        }
        if (fields === 'repeatPassword') {
          result.isPwdMatched = validate({ password: payload?.password, repeatPassword: value , name: 'isPwdMatched' });
        }
        if (Object.keys(fieldsErrors)?.indexOf(fields) > -1) {
          result[fields] = validate({ value, name: fields });
        }
        break;

      default:
        break;
    }
    return result;
  };

  const handleChange = ({ target }) => {
    const { name, value } = target;

    const errors = validateField(name, value);

    setFieldsErrors(errors);

    setPayload({
      ...payload,
      [name]: value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    let errors = validateField(fieldsErrors);

    setFieldsErrors(errors);

    let hasError = false;

    for (let keys in errors) {
      if(errors[keys]){
        hasError = true;
        break;
      }
    }

    if (!hasError) {
      onSubmit( payload );
    }
  };

  const renderAvatarOptions = (iconsList = []) => {
    const generateOption = (item) => (<option value={item.name}>{item.label}</option>);

    const filterList = (item) => item.role === 'avatar';

    return iconsList.filter(filterList).map(generateOption);
  };

  const {
    email,
    userName,
    password,
    repeatPassword,
    alterEgo,
  }                       = payload,
  {
    registerFormSettings
  }                       = config,
  registerTranslations    = translations.register,
  titleLabel              = registerTranslations.title,
  emailLabel              = registerTranslations.email,
  userNameLabel           = registerTranslations.userName,
  passwordLabel           = registerTranslations.password,
  repeatPasswordLabel     = registerTranslations.repeatPassword,
  alterEgoLabel           = registerTranslations.alterEgo,
  iconLabel               = registerTranslations.icon,
  submitLabel             = registerTranslations.submit,
  pwdTooltipLabel         = registerTranslations.passwordTooltip,
  repeatPwdTooltipLabel   = registerTranslations.repeatPasswordTooltip,
  emailTooltipLabel       = registerTranslations.emailTooltip,
  userTooltipLabel        = registerTranslations.userTooltip,
  alterEgoTooltipLabel    = registerTranslations.alterEgoTooltip,
  emailSettings           = registerFormSettings.email || {},
  emailMinSetting         = emailSettings.minLength,
  emailMaxSetting         = emailSettings.maxLength,
  passwordSettings        = registerFormSettings.password || {},
  pwdMinSetting           = passwordSettings.minLength,
  pwdMaxSetting           = passwordSettings.maxLength,
  userNameSettings        = registerFormSettings.userName || {},
  userNameMinSetting      = userNameSettings.minLength,
  userNameMaxSetting      = userNameSettings.maxLength;

  return (
    <div className={styles.registerContainer} onClick={e => e.stopPropagation()}>
      <h2 className={styles.registerTitle}>{titleLabel}</h2>
      <form onSubmit={handleSubmit} className={styles.registerForm}>
        { errorLabel && <h3 className={styles.registerError}>{errorLabel}</h3>}
        <h3 className={styles.registerHeadline}>{emailLabel}</h3>
        <InputWithError
          type="email"
          name="email"
          value={email}
          minLength={emailMinSetting}
          maxLength={emailMaxSetting}
          title={emailTooltipLabel}
          placeholder={emailLabel}
          onChange={handleChange}
          errorMsg={fieldsErrors?.email}
        />
        <h3 className={styles.registerHeadline}>{userNameLabel}</h3>
        <InputWithError
          type="text"
          name="userName"
          value={userName}
          minLength={userNameMinSetting}
          maxLength={userNameMaxSetting}
          title={userTooltipLabel}
          placeholder={userNameLabel}
          onChange={handleChange}
          errorMsg={fieldsErrors?.userName}
        />
        <h3 className={styles.registerHeadline}>{passwordLabel}</h3>
        <InputWithError
          type="password"
          name="password"
          value={password}
          minLength={pwdMinSetting}
          maxLength={pwdMaxSetting}
          title={pwdTooltipLabel}
          placeholder={passwordLabel}
          onChange={handleChange}
          errorMsg={fieldsErrors?.password}
        />
        <h3 className={styles.registerHeadline}>{repeatPasswordLabel}</h3>
        <InputWithError
          type="password"
          name="repeatPassword"
          value={repeatPassword}
          minLength={pwdMinSetting}
          maxLength={pwdMaxSetting}
          title={repeatPwdTooltipLabel}
          placeholder={repeatPasswordLabel}
          onChange={handleChange}
          errorMsg={fieldsErrors?.isPwdMatched || fieldsErrors?.repeatPassword}
        />
        <h3 className={styles.registerHeadline}>{alterEgoLabel}</h3>
        <InputWithError
          name="alterEgo"
          className={styles.registerinput}
          value={alterEgo}
          title={alterEgoTooltipLabel}
          placeholder={alterEgoLabel}
          onChange={handleChange}
          errorMsg={fieldsErrors?.alterEgo}
        />
        <h3 className={styles.registerHeadline}>{iconLabel}</h3>
        <select name="icon" className={styles.registerinput} onChange={handleChange} defaultValue={payload.icon}>
          {renderAvatarOptions(icons)}
        </select>
        <button className={styles.registerBtn}>{submitLabel}</button>
      </form>
    </div>
  );
};

Register.propTypes = {
  onSubmit: PropTypes.func,
  translations: PropTypes.object
};

Register.defaultProps = {
  onSubmit: () => {},
  translations: {}
};

export default Register;
