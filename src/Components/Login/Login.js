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
  constructor(props){
    super(props)
    this.state = {
      userName: '',
      password: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  static propTypes = {
    onSubmit: PropTypes.func
  }

  static defaultProps = {
    onSubmit: () => {}
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state)
  }

  render = () => {
    const { userName, password } = this.state,
      { language }      = config,
      translations      = getTranslations(language), //ToDo: Replace this language for config directly or from store
      loginTranslations = translations.login,
      userNameLabel     = loginTranslations.userName,
      passwordLabel     = loginTranslations.password,
      submitLabel       = loginTranslations.button;
    return (
      <div className={styles.loginContainer} onClick={e => e.stopPropagation()}>
        <form onSubmit={this.handleSubmit}>
          <h3 className={styles.loginHeadline}>{userNameLabel}</h3>
          <input name="userName" className={styles.logininput} value={userName} onChange={this.handleChange} />
          <h3 className={styles.loginHeadline}>{passwordLabel}</h3>
          <input name="password" className={styles.logininput} value={password} onChange={this.handleChange} type="password" />
          <button className={styles.loginBtn} >{submitLabel}</button>
        </form>
        <div>
            <span>
              Test users:
            </span>
            <div>
              <button onClick={() => this.setState({userName: 'a@b.com', password: '1234'})}>User 1</button>
              <button onClick={() => this.setState({userName: 'c@d.com', password: '1234'})}>User 2</button>
              <button onClick={() => this.setState({userName: 'e@f.com', password: '1234'})}>User 3</button>
              <button onClick={() => this.setState({userName: 'g@h.com', password: '1234'})}>User 4</button>
            </div>
          </div>
      </div>
    );
  };
};

export default Login;
