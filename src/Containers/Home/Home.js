// Core
import React, { useState, useRef, useEffect } from 'react';

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
    content: {label: 'Goldar', smallImgUrl: smallCityMapMock, largeImgUrl: bigCityMapMock},
  },
  {
    type: 'image',
    content: {label: 'Do it!', title: 'Just do it!', name: 'shia', imgUrl: 'http://cdn01.cdn.justjared.com/wp-content/uploads/headlines/2015/01/shia-labeouf-goes-shirtless-dances-in-a-cage-for-sias-elastic-hart.jpg'},
  },
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
  },
];

// Styles
// import styles from './Home.module.css';

const Home = ({ isDevelop, logOut, user, developerMode, updateDeveloperModeSetting, translations }) => {
  const [ state, setState ] = useState({});
  const mounted = useRef();

  const handleState = (state) => {
    return setState(state);
  };

  const showImages = (images) => {
    return setState({
      showModal: 'images',
      imagesList: images
    });
  };

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
    } else {
      // do componentDidUpate logic
      const { shouldLogOut } = state;
      if (shouldLogOut) {
        logOut();
      }
    }
  });

  const {
    currentPlayers,
    timeSpent,
    sessionNumber,
    gameName,
    showModal,
    imagesList,
  } = state,
  { userName } = user;

  return (
    <div>
      {showModal && <Modal onClose={() => handleState({ showModal: false })}>

        {showModal === 'maps' && <PictureViewer
          imageList={mockedImages} //ToDo: Replace this mocks with real data
        />}

        {showModal === 'images' && <PictureViewer
          imageList={imagesList} //ToDo: Replace this mocks with real data
        />}

        {showModal === 'about' && <About translations={translations} />}

        {showModal === 'availableCommands' && <AvailableCommands translations={translations} />}
        {showModal === 'manuals' && <ManualsViewer manualsList={mockedManuals} />}
      </Modal>}
      <MainMenu
        handleState={handleState}
        account={userName}
        isDevelop={isDevelop}
        developerMode={developerMode}
        updateDeveloperModeSetting={updateDeveloperModeSetting}
        translations={translations}
      />
      <MainBoard showImages={showImages} />
      <StatusBar
        players={currentPlayers}
        timeSpent={timeSpent}
        sessionNumber={sessionNumber}
        gameName={gameName}
        translations={translations}
      />
    </div>
  );
};

const mapStateToProps = state => ({
  // FILTERED PROPS STORE HERE
  user: _get(state, 'session.user'),
  isDevelop: _get(state, 'session.user.role') === 'dev',
  developerMode: state?.applicationSettings?.developerMode,
  translations: state?.applicationSettings?.translations,
});

const mapDispatchToProps = (dispatch) => {
  // Filter used actions
  const { logOut, updateDeveloperModeSetting } = ActionCreators;
  return bindActionCreators(
    {
      // FILTERED ACTIONS HERE
      logOut,
      updateDeveloperModeSetting,
    },
    dispatch,
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
