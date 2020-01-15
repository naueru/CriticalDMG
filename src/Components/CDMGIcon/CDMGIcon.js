// Core
import React, { Component } from 'react';

// Libraries
import PropTypes from 'prop-types';

// Styles
import styles from './CDMGIcon.module.css';

class CDMGIcon extends Component {
  static propTypes = {
    name: PropTypes.string
  };

  static defaultProps = {
    name: ''
  };
  constructor(props) {
    super(props);
    this.state = {};
  }
  render = () => {
    const { name } = this.props;
    return (
      <div className={`${styles.icon} ${styles[name]}`} />
    );
  };
}

export default CDMGIcon;
