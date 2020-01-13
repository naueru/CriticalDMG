// Core
import React, { Component } from 'react';

// Components
import MainMenu from '../../Components/MainMenu';
import MainBoard from '../../Components/MainBoard';
import StatusBar from '../../Components/StatusBar';
import Modal from '../../Components/Modal';
import MapViewer from '../../Components/MapViewer';
import About from '../../Components/About';

// Mocks
const smallCityMapMock = require('../../assets/img/mocks/GoldarSmall.jpg');
const bigCityMapMock = require('../../assets/img/mocks/GoldarBig.jpg');
const smallContinentMapMock = require('../../assets/img/mocks/GaiaSmall.jpg');
const bigContinentMapMock = require('../../assets/img/mocks/GaiaBig.jpg');
const mockedMaps = [
  {label: 'Continent', smallImgUrl: smallContinentMapMock, largeImgUrl: bigContinentMapMock},
  {label: 'Goldar', smallImgUrl: smallCityMapMock, largeImgUrl: bigCityMapMock}
];

// Styles
// import styles from './Home.module.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleState = (state) => {
    return this.setState(state);
  }

  render = () => {
    const {
      currentPlayers,
      timeSpent,
      sessionNumber,
      gameName,
      showModal,
      showMaps,
      showAbout
    } = this.state;

    return (
      <div>
        {showModal && <Modal onClose={() => this.handleState({ showModal: false, showMaps: false })}>
          {showMaps && <MapViewer
            maps={mockedMaps} //ToDo: Replace this mocks with real data
          />}
          {showAbout && <About />}
        </Modal>}
        <MainMenu handleState={this.handleState} />
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
