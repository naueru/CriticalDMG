// Core
import React, { Component } from 'react';

// Styles
import styles from './VideoPlayer.module.css';

class VideoPlayer extends Component {
  render = () => {
    return (
      <div className={styles.video}>Camera</div>
    );
  };
}

export default VideoPlayer;
