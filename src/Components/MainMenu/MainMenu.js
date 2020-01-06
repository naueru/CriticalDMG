// Core
import React, { Component } from 'react';

// Translations
import getTranslations from '../../CritCore/Translations/Translations.js';

// Styles
import styles from './MainMenu.module.css';

class MainMenu extends Component {
  render = () => {
    const translations = getTranslations('es'), // ToDo: Define a way to set the language
      mainMenuLabels = (translations && translations.mainMenu) || {};
    return (
      <nav>
        <ul className={styles.mainList}>
          <li className={styles.mainListItem}>{mainMenuLabels.file}</li>
          <li className={styles.mainListItem}>{mainMenuLabels.edition}</li>
          <li className={styles.mainListItem}>{mainMenuLabels.library}</li>
          <li className={styles.mainListItem}>{mainMenuLabels.help}</li>
        </ul>
      </nav>
    );
  };
}

export default MainMenu;
