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
        <Modal>
          <TabsContainer tabs={[
            {label: 'Tab1', content: <div>Content 1</div>},
            {label: 'Tab2', content: <div>Content 2</div>},
            {label: 'Tab3', content: <div>Content 3</div>},
          ]}
          width={200}
          height={250}
          />
        </Modal>
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
