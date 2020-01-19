// Core
import React, { Component } from 'react';

// Libraries
import PropTypes from 'prop-types';

// Components
import CDMGIcon from '../../../CDMGIcon';

// Styles
import styles from './Message.module.css';

class Message extends Component {
  static propTypes = {
    picture: PropTypes.string,
    icon: PropTypes.string,
    message: PropTypes.string
  };

  static defaultProps = {
    picture: '',
    icon: '',
    message: ''
  };
  constructor(props) {
    super(props);
    this.state = {};
  }
  render = () => {
    const { picture, icon, message } = this.props,
    renderIcon = !picture && icon;
    return (
      <div className={styles.messageContainer}>
        <span className={styles.pictureContainer}>
          {renderIcon && <CDMGIcon name={icon} />}
        </span>
        <p className={styles.messageText}>{message}</p>
      </div>
    );
  };
}

export default Message;
