// Core
import React from 'react';

// Libraries
import PropTypes from 'prop-types';

// Styles
import styles from './CDMGIcon.module.css';

const CDMGIcon = ({name}) => {
  return (
    <div className={`${styles.icon} ${styles[name]}`} />
  );
};

CDMGIcon.propTypes = {
  name: PropTypes.string,
};

CDMGIcon.defaultProps = {
  name: '',
};

export default CDMGIcon;
