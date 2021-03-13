// Core
import React from 'react';

// Libraries
import PropTypes from 'prop-types';

// Components
import VideoPlayer from '../VideoPlayer';
import ChatLog from '../ChatLog';

// Styles
import styles from './MainBoard.module.css';

const MainBoard = ({showImages}) => {
  return (
    <section className={styles.mainBoard}>
      <section className={styles.mainBoardLeftPanel}>
        <VideoPlayer />
        <div>Table</div>
      </section>
      <ChatLog showImages={showImages} />
    </section>
  );
};

MainBoard.propTypes = {
  showImages: PropTypes.func,
};

MainBoard.defaultProps = {
  showImages: () => {},
};

export default MainBoard;
