// React
import React, { Component } from 'react';

// Config
import config from '../../CritCore/Config/config';

// Translations
import getTranslations from '../../CritCore/Translations/Translations.js';

// Styles
import styles from './About.module.css';

class About extends Component {
  render = () => {
    const { about } = config,
      { docsUrl } = about,
      translations  = getTranslations('es'),
      { description, docsLinkLabel } = translations.about;
    return (
      <div className={styles.aboutContainer}>
        <h1>CriticalDMG</h1>
        <p className={styles.aboutDescription}>{description}</p>
        <a href={docsUrl} target="_blank" rel="noopener noreferrer">{docsLinkLabel}</a>
      </div>
    );
  };
}

export default About;
