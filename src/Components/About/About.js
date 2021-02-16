// React
import React from 'react';

// Config
import config from '../../CritCore/Config/config';

// Styles
import styles from './About.module.css';

const About = ({ translations }) => {
  const { about } = config,
    { docsUrl } = about,
    { description, docsLinkLabel } = translations.about;
  return (
    <div className={styles.aboutContainer}>
      <h1>CriticalDMG</h1>
      <p className={styles.aboutDescription}>{description}</p>
      <a href={docsUrl} target="_blank" rel="noopener noreferrer">{docsLinkLabel}</a>
    </div>
  );
}

export default About;
