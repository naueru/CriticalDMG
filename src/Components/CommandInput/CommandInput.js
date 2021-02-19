// Core
import React from 'react';

// Libraries
import PropTypes from 'prop-types';

// Styles
import styles from './CommandInput.module.css';

const CommandInput = ({
  handleSubmit,
  handleHistory,
  handleChange,
  placeholder,
  defaultInput,
}) => {

  const handleChanges = (e = {}) => {
    e.preventDefault();
    const { target } = e,
          { value }  = target;
    handleChange(value);
  };

  const handleKeyDown = (e = {}) => {
    const { value } = e.target;
    switch(e.key){
      case 'Enter':
        handleSubmit(value);
        e.target.value = '';
        break;
      case 'ArrowUp':
        handleHistory('decrease', setInputValue);
        break;
      case 'ArrowDown':
        handleHistory('increase', setInputValue);
        break;
      default:
        break;
    }
  };

  const setInputValue = (val) => {
    let inp = document.getElementById('commandInput');
    inp.value = val;
  };

  return (
    <input
      id="commandInput"
      defaultValue={defaultInput}
      placeholder={placeholder}
      className={styles.inputText}
      onKeyDown={handleKeyDown}
      onChange={handleChanges}
    />
  );
};

CommandInput.propTypes = {
  handleSubmit: PropTypes.func,
  handleHistory: PropTypes.func,
  placeholder: PropTypes.string,
  defaultInput: PropTypes.string,
  handleChange: PropTypes.func,
};

CommandInput.defaultProps = {
  handleSubmit: () => {},
  handleHistory: () => {},
  placeholder: '',
  defaultInput: '',
  handleChange: () => {},
};

export default CommandInput;
