// Core
import React, { Component } from 'react';

// Components
import VideoPlayer from '../VideoPlayer';
import ChatLog from '../ChatLog';

// Styles
import styles from './MainBoard.module.css';

class MainBoard extends Component {
  render = () => {
    return (
      <section className={styles.mainBoard}>
        <section className={styles.mainBoardLeftPanel}>
          <VideoPlayer />
          <div>Table</div>
        </section>
        <ChatLog />
      </section>
    );
  };
}

export default MainBoard;
