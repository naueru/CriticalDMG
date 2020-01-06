// Core
import React, { Component } from 'react';

// Styles
import styles from './MainBoard.module.css';

class MainBoard extends Component {
  render = () => {
    return (
      <section className={styles.mainBoard}>
        <section className={styles.mainBoardLeftPanel}>
          <div className={styles.video}>Camera</div>
          <div>Table</div>
        </section>
        <div className={styles.chat}>Chat</div>
      </section>
    );
  };
}

export default MainBoard;
