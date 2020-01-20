// Core
import React, { Component } from 'react';

// Components
import MainMenu from '../../Components/MainMenu';
import MainBoard from '../../Components/MainBoard';
import StatusBar from '../../Components/StatusBar';
import Modal from '../../Components/Modal';
import PictureViewer from '../../Components/PictureViewer';
import About from '../../Components/About';

// Mocks
const smallCityMapMock = require('../../assets/img/mocks/GoldarSmall.jpg');
const bigCityMapMock = require('../../assets/img/mocks/GoldarBig.jpg');
const smallContinentMapMock = require('../../assets/img/mocks/GaiaSmall.jpg');
const bigContinentMapMock = require('../../assets/img/mocks/GaiaBig.jpg');
const mockedImages = [
  {
    type: 'map',
    content: {label: 'Continent', smallImgUrl: smallContinentMapMock, largeImgUrl: bigContinentMapMock},
  },
  {
    type: 'map',
    content: {label: 'Goldar', smallImgUrl: smallCityMapMock, largeImgUrl: bigCityMapMock}
  },
  {
    type: 'image',
    content: {label: 'Do it!', title: 'Just do it!', name: 'shia', imgUrl: 'http://cdn01.cdn.justjared.com/wp-content/uploads/headlines/2015/01/shia-labeouf-goes-shirtless-dances-in-a-cage-for-sias-elastic-hart.jpg'}
  }
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
  };

  showImages = (images) => {
    return this.setState({
      showModal: true,
      showImages: true,
      imagesList: images
    });
  };

  render = () => {
    const {
      currentPlayers,
      timeSpent,
      sessionNumber,
      gameName,
      showModal,
      showMaps,
      showAbout,
      showImages,
      imagesList
    } = this.state;

    return (
      <div>
        {showModal && <Modal onClose={() => this.handleState({ showModal: false, showMaps: false, showAbout: false, showImages: false })}>

          {showMaps && <PictureViewer
            imageList={mockedImages} //ToDo: Replace this mocks with real data
          />}

          {showImages && <PictureViewer
            imageList={imagesList} //ToDo: Replace this mocks with real data
          />}

          {showAbout && <About />}
        </Modal>}
        <MainMenu handleState={this.handleState} />
        <MainBoard showImages={this.showImages} />
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
