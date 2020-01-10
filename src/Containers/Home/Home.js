// Core
import React, { Component } from 'react';

// Components
import MainMenu from '../../Components/MainMenu';
import MainBoard from '../../Components/MainBoard';
import StatusBar from '../../Components/StatusBar';
import Modal from '../../Components/Modal';
import TabsContainer from '../../Components/TabsContainer';

// Styles
// import styles from './Home.module.css';

class Home extends Component {
  render = () => {
    let me = this,
      state = me.state || {},
      currentPlayers  = state.currentPlayers,
      timeSpent       = state.initialTime,
      sessionNumber   = state.sessionNumber,
      gameName        = state.gameName;
    return (
      <div>
        <MainMenu />
        <MainBoard />
        <StatusBar
          players={currentPlayers}
          timeSpent={timeSpent}
          sessionNumber={sessionNumber}
          gameName={gameName}
        />
      </div>
    );
  };
}

export default Home;
