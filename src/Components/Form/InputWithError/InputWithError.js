// Core
import React from 'react';

// Libraries
import PropTypes from 'prop-types';

// Styles
import styles from './InputWithError.module.css';

const InputWithError = ({
  type,
  name,
  required,
  value,
  minLength,
  maxLength,
  title,
  placeholder,
  onChange,
  errorMsg,
}) => {
  return (
    <span className={styles.inputContainer}>
      <input
        type={type}
        name={name}
        required={required}
        value={value}
        minLength={minLength}
        maxLength={maxLength}
        title={title}
        placeholder={placeholder}
        onChange={onChange}
        className={`${styles.input} ${errorMsg ? styles.hasError : ''}`}
      />
      {errorMsg && <p className={styles.errorFeedback}>{errorMsg}</p>}
    </span>
  );
};

InputWithError.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  required: PropTypes.bool,
  value: PropTypes.string,
  minLength: PropTypes.number,
  maxLength: PropTypes.number,
  title: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  errorMsg: PropTypes.string,
};

InputWithError.defaultProps = {
  type: '',
  name: '',
  required: false,
  value: '',
  minLength: null,
  maxLength: null,
  title: '',
  placeholder: '',
  onChange: () => {},
  errorMsg: null,
};

export default InputWithError;
