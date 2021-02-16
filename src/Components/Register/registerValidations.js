// Config
import config from '../../CritCore/Config/config';

const registerValidator = ({ translations }) => {
  const {
    registerFormSettings
  } = config,
  registerFormConfig                = registerFormSettings,
  registerFormConfigEmail           = registerFormConfig.email,
  emailMinLengthConfig              = registerFormConfigEmail.minLength,
  emailMaxLengthConfig              = registerFormConfigEmail.maxLength,
  registerFormConfigUserName        = registerFormConfig.userName,
  userNameMinLengthConfig           = registerFormConfigUserName.minLength,
  userNameMaxLengthConfig           = registerFormConfigUserName.maxLength,
  registerFormConfigPassword        = registerFormConfig.password,
  passwordMinLengthConfig           = registerFormConfigPassword.minLength,
  passwordMaxLengthConfig           = registerFormConfigPassword.maxLength,
  registerInputErrors               = translations.register,
  msgErrorInput                     = registerInputErrors.errors,
  msgErrorInputEmail                = msgErrorInput.email,
  msgErrorInputEmailMinMaxLength    = msgErrorInput.emailMinMaxLength,
  msgErrorInputUserName             = msgErrorInput.userName,
  msgErrorInputUserNameMinMaxLength = msgErrorInput.userNameMinMaxLength,
  msgErrorInputPassword             = msgErrorInput.password,
  msgErrorInputAlterEgo             = msgErrorInput.alterEgo,
  msgErrorInputIsPwdMatched         = msgErrorInput.isPwdMatched,
  msgErrorInputFieldRequired        = msgErrorInput.fieldRequired;

  return {
    email: ({ value }) => {
      //eslint-disable-next-line
      const emailRegexp =  /^\w+([\.\+\-]?\w+)*@([\.-]?\w+)*(\.\w{2,4})+$/;
      if (!value && value !== 0){
        return msgErrorInputFieldRequired;
      }
      if (!value.match(emailRegexp)){
        return msgErrorInputEmail;
      }
      if (value.length < emailMinLengthConfig || value.length > emailMaxLengthConfig) {
        return msgErrorInputEmailMinMaxLength;
      }
      return null;
    },
    userName: ({ value }) => {
      const userNameRegexp = /^[a-z\d_]{6,20}$/i;
      if (!value && value !== 0){
        return msgErrorInputFieldRequired;
      }
      if (!value.match(userNameRegexp)){
        return msgErrorInputUserName;
      }
      if (value.length < userNameMinLengthConfig || value.length > userNameMaxLengthConfig) {
        return msgErrorInputUserNameMinMaxLength;
      }
      return null;
    },
    password: ({ value }) => {
      if (!value && value !== 0){
        return msgErrorInputFieldRequired;
      }
      if (value.length < passwordMinLengthConfig || value.length > passwordMaxLengthConfig) {
        return msgErrorInputPassword;
      }
      return null;
    },
    repeatPassword: ({ value }) => {
      if (!value && value !== 0){
        return msgErrorInputFieldRequired;
      }
      return null;
    },
    alterEgo: ({ value }) => {
      if (!value && value !== 0){
        return msgErrorInputFieldRequired;
      }
      if (!value && value !== 0) {
        return msgErrorInputAlterEgo;
      }
      return null;
    },
    isPwdMatched: ({ password, repeatPassword }) => {
      if (password !== repeatPassword){
        return msgErrorInputIsPwdMatched;
      }
      return null;
    }
  };
};

export default registerValidator;
