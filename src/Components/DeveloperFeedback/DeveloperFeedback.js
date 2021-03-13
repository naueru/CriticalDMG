// Core
import React from 'react';

// Styles
import styles from './DeveloperFeedback.module.css';

const DeveloperFeedback = ({children}) => {
  return (
    <pre className={styles.devFeedback}>{children}</pre>
  );
};

export default DeveloperFeedback;
