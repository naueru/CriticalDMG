// React
import React, { Component } from 'react';

// Libraries
import PropTypes from 'prop-types';

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
    const { userName, pwd, handleChange, onSubmit } = this.props;
    return (
      <div className={styles.loginContainer} onClick={e => e.stopPropagation()}>
        <h3 className={styles.loginHeadline}>User Name</h3>
        <input className={styles.logininput} defaultValue={userName} onChange={e => handleChange({userName: e.target.value})} />
        <h3 className={styles.loginHeadline}>Password</h3>
        <input className={styles.logininput} defaultValue={pwd} onChange={e => handleChange({password: e.target.value})} type="password" />
        <button className={styles.loginBtn} onClick={onSubmit}>Login</button>
        <div>
          Test users
          <button onClick={() => handleChange({userName: 'valdamir', password: '1234'})}>Test user 1</button>
          <button onClick={() => handleChange({userName: 'meriadoc', password: '1234'})}>Test user 2</button>
          <button onClick={() => handleChange({userName: 'dilfo', password: '1234'})}>Test user 3</button>
        </div>
      </div>
    );
  };
};

export default Login;
