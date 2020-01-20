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
    actionModifier: PropTypes.string,
    icon: PropTypes.string,
    name: PropTypes.string,
    message: PropTypes.string
  };

  static defaultProps = {
    picture: '',
    actionModifier: '',
    icon: '',
    name: '',
    message: ''
  };
  constructor(props) {
    super(props);
    this.state = {};
  }
  render = () => {
    const { picture, icon, message, name, actionModifier } = this.props,
    renderIcon = !picture && icon;
    return (
      <div className={styles.messageContainer}>
        <span className={styles.pictureContainer}>
          {renderIcon && <CDMGIcon name={icon} />}
        </span>
        <section className={styles.messageContent}>
          <div className={styles.messageHeadline}>
            <h4 className={styles.messageName}>{name}</h4>
            {actionModifier && <span className={styles.messageActionModifier}>{actionModifier}</span>}
          </div>
          <p className={styles.messageText}>{message}</p>
        </section>
      </div>
    );
  };
}

export default Message;
