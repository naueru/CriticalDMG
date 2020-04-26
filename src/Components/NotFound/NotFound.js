
// React
import React, { Component } from 'react';

// Config
// import config from '../../CritCore/Config/config';

// Translations
// import getTranslations from '../../CritCore/Translations/Translations.js';

// Styles
import styles from './NotFound.module.css';

class NotFound extends Component {
  render = () => {
    return (
      <div className={styles.notFoundContainer}>
        The page you are looking for is not here
      </div>
    );
  };
}

export default NotFound;
