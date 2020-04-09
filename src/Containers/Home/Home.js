// Core
import React, { Component } from 'react';

// Store
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ActionCreators } from '../../actions';

// Libraries
import _get from 'lodash/get';

// Components
import MainMenu from '../../Components/MainMenu';
import MainBoard from '../../Components/MainBoard';
import StatusBar from '../../Components/StatusBar';
import Modal from '../../Components/Modal';
import PictureViewer from '../../Components/PictureViewer';
import ManualsViewer from '../../Components/ManualsViewer';
import About from '../../Components/About';
import AvailableCommands from '../../Components/AvailableCommands';

// Mocks
const smallCityMapMock = require('../../assets/img/mocks/GoldarSmall.jpg');
const bigCityMapMock = require('../../assets/img/mocks/GoldarBig.jpg');
const smallContinentMapMock = require('../../assets/img/mocks/GaiaSmall.jpg');
const bigContinentMapMock = require('../../assets/img/mocks/GaiaBig.jpg');

const manualCore = require('../../assets/manuals/Core.pdf');
const manualExp = require('../../assets/manuals/Exp1.pdf');
const manualBeast = require('../../assets/manuals/Beasts.pdf');
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
const mockedManuals = [
  {
    label: 'Core',
    url: manualCore,
  },
  {
    label: 'Expansion 1',
    url: manualExp,
  },
  {
    label: 'Bestiary',
    url: manualBeast,
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
      showModal: 'images',
      imagesList: images
    });
  };

  componentDidUpdate = () => {
    const { shouldLogOut } = this.state; 
    const { logOut } = this.props; 
    if (shouldLogOut) {
      logOut()
    }
  }

  render = () => {
    const {
        user
      } = this.props,
      {
        currentPlayers,
        timeSpent,
        sessionNumber,
        gameName,
        showModal,
        imagesList
      } = this.state,
      { userName } = user;

    return (
      <div>
        {showModal && <Modal onClose={() => this.handleState({ showModal: false })}>

          {showModal === 'maps' && <PictureViewer
            imageList={mockedImages} //ToDo: Replace this mocks with real data
          />}

          {showModal === 'images' && <PictureViewer
            imageList={imagesList} //ToDo: Replace this mocks with real data
          />}

          {showModal === 'about' && <About />}

          {showModal === 'availableCommands' && <AvailableCommands />}
          {showModal === 'manuals' && <ManualsViewer manualsList={mockedManuals} />}
        </Modal>}
        <MainMenu handleState={this.handleState} account={userName}/>
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

const mapStateToProps = state => ({
  // FILTERED PROPS STORE HERE
  user: _get(state, 'session.user'),
});

const mapDispatchToProps = (dispatch) => {
  // Filter used actions
  const { logOut } = ActionCreators;
  return bindActionCreators(
    {
      // FILTERED ACTIONS HERE
      logOut,
    },
    dispatch,
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
