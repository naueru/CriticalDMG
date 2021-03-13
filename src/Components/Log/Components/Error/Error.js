// Core
import React from 'react';

// Libraries
import PropTypes from 'prop-types';

// Styles
import styles from './Error.module.css';

const Error = ({text}) => {
  return (
    <div className={styles.errorContainer}>
      <p className={styles.errorText}>{text}</p>
    </div>
  );
};

Error.propTypes = {
  text: PropTypes.string,
};

Error.defaultProps = {
  text: '',
};

export default Error;
