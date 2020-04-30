// Core
import React, { Component } from 'react';

// Libraries
import PropTypes from 'prop-types';

// Styles
import styles from './Error.module.css';

class Error extends Component {
  static propTypes = {
    text: PropTypes.string
  };

  static defaultProps = {
    text: ''
  };

  render = () => {
    const { text } = this.props;

    return (
      <div className={styles.errorContainer}>
        <p className={styles.errorText}>{text}</p>
      </div>
    );
  };
}

export default Error;
