// Core
import React from 'react';

// Styles
import styles from './DeveloperFeedback.module.css';

const DeveloperFeedback = ({children, orientation='left'}) => {
  const classNames = `${styles.devFeedback} ${styles[orientation]}`;
  return (
    <pre className={classNames}>{children}</pre>
  );
};

export default DeveloperFeedback;
