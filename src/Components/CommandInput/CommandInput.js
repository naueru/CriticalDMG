// Core
import React, { Component } from 'react';

// Libraries
import PropTypes from 'prop-types';

// Styles
import styles from './CommandInput.module.css';

class CommandInput extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func,
    handleHistory: PropTypes.func,
    placeholder: PropTypes.string,
    defaultInput: PropTypes.string,
    handleChange: PropTypes.func
  };

  static defaultProps = {
    handleSubmit: () => {},
    handleHistory: () => {},
    placeholder: '',
    defaultInput: '',
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
    const { handleSubmit, handleHistory } = this.props,
      { value } = e.target;
    switch(e.key){
      case 'Enter':
        handleSubmit(value);
        e.target.value = '';
        break;
      case 'ArrowUp':
        handleHistory('decrease', this.setInputValue);
        break;
      case 'ArrowDown':
        handleHistory('increase', this.setInputValue);
        break;
      default:
        break
    }
  };

  setInputValue = (val) => {
    let inp = document.getElementById('commandInput');
    inp.value = val;
  };

  render = () => {
    const { placeholder, defaultInput } = this.props;
    return (
      <input
        id="commandInput"
        defaultValue={defaultInput}
        placeholder={placeholder}
        className={styles.inputText}
        onKeyDown={this.handleKeyDown}
        onChange={this.handleChange}
      />
    );
  };
}

export default CommandInput;
