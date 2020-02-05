// React
import React from 'react';

// Config
import config from '../../CritCore/Config/config';

// Translations
import getTranslations from '../../CritCore/Translations/Translations.js';

// Styles
import styles from './AvailableCommands.module.css';

const renderCommands = (list) => {
  const commands = list.map((line, index) => <span className={styles.commandRow} key={`AC_${index}`}>
    <span className={styles.commandLeftHalf}>
      {line.command}
    </span>
    <span className={styles.commandRightHalf}>
      {line.description}
    </span>
  </span>)
  return commands;
};

const AvailableCommands = () => {
  const { language } = config,
    translations  = getTranslations(language),
    { title, description } = translations.availableCommands;
  return (
    <div className={styles.availableCommandsContainer}>
      <h2>{title}</h2>
      <p className={styles.availableCommandsDescription}>{renderCommands(description)}</p>
    </div>
  );
};

export default AvailableCommands;
