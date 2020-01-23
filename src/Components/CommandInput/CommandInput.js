// Core
import React, { Component } from 'react';

// Libraries
import PropTypes from 'prop-types';

// Styles
import styles from './CommandInput.module.css';

class CommandInput extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func,
    placeholder: PropTypes.string,
    handleChange: PropTypes.func
  };

  static defaultProps = {
    handleSubmit: () => {},
    placeholder: '',
    handleChange: () => {}
  };

  handleChange = (e = {}) => {
    e.preventDefault();
    const { handleChange } = this.props,
      { target } = e,
      { value } = target;
    handleChange(value);
  };

  handleKeyDown = (e = {}) => {
    const { handleSubmit } = this.props,
      { value } = e.target;
    if (e.key === 'Enter') {
      handleSubmit(value);
      e.target.value = '';
    }
  };

  render = () => {
    const { placeholder } = this.props;
    return (
      <input
        placeholder={placeholder}
        className={styles.inputText}
        onKeyDown={this.handleKeyDown}
        onChange={this.handleChange}
      />
    );
  };
}

export default CommandInput;
