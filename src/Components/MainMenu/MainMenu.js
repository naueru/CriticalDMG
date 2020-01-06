// Core
import React, { Component } from 'react';

// Styles
import styles from './MainMenu.module.css';

class MainMenu extends Component {
  render = () => {
    return (
      <nav>
        <ul className={styles.mainList}>
          <li className={styles.mainListItem}>Archivo</li>
          <li className={styles.mainListItem}>Edición</li>
          <li className={styles.mainListItem}>Biblioteca</li>
          <li className={styles.mainListItem}>Ayuda</li>
        </ul>
      </nav>
    );
  };
}

export default MainMenu;
