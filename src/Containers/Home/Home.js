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

const mockedImages = [
  {
    type: 'map',
    content: {
      label: 'Continent',
      smallImgUrl: 'https://ucf9a5c86ef65184a47c4c9b5c9f.previews.dropboxusercontent.com/p/thumb/AAzHL9gj4ljbctMtKRAiMvfVrQJJkp4MecxKefgrRQkY5o2UJegDWCMO5wwk_Cb5XWoGQWURh38YKO95BhK0R8fuvVFdHi-V_T8_BrgE7qmFOeLuHG2mgLOMqmvJEt788puKJkQYab1tIHR2W7gbqYI3rkXly4rBmIJzKhZdQvgHVcJQv3xwvp3t1QDMADB77e7DiOEMb56aAV_gbLTWWjJT0lk1GuvbxiRZWlE59-_wWXeOImrct-1AgwjPiTAv3RToMNVb4ktik-1KtTAFHipGIAwLJ5yU0-7PSfukWMCf1rbFxTkL9QjRBK6_wS3HPl5Sbs2kaE2VvFah0IJp1ruZRZPNn7kpW-3wqOi97ykZkmGB9jW9nJ54sZsGMqYZvBnS3TVJGpUvusruVIWV-Wf5/p.jpeg?fv_content=true&size_mode=5',
      largeImgUrl: 'https://uc818554317aaeae118f75e8b596.previews.dropboxusercontent.com/p/thumb/AAzuaqXvGTbRBGdWLfZGKw9dgQ6LFiKn9M4dpnh1TsSGNLlamazVDg-dj-6lu7ZtBnQQ-1o_A99ekltLT3OIcjGorc1Xc_9wv-G3f0LLNucN0jbAYDiARmMRR9mkwUg-KPOs4yEm6vbHBOmPg7ofYyh69mtgcSHv_wH7U3-3FskMcNfM5ASF5Mfc8tmaNeqfIxBiSz_28g5j9slPhXuJU29vixVZIrsJCOZXqC85CRbIHY4L47YsFQp5DYU400Qcvj4LMSzxRX0hLRmLKq2y2rRYEPi_y7gpHrzdXDywPf-Cw9e7WcexlaaN2hNqSTw-nf3bJWZqQ5X0xpaDJsoRhVCci3CR2IC3-3_NK8cb4QbDOK302sOblIsYMmbcwklZFXBEIQrZ9EDMfvItBsifn8OU/p.jpeg?fv_content=true&size_mode=5'
    },
  },
  {
    type: 'map',
    content: {
      label: 'Goldar',
      smallImgUrl: 'https://uc0673e71c574d55646c704912a7.previews.dropboxusercontent.com/p/thumb/AAwdQQG6mksKO9qUuKxGH02fc2mo3PBsjchhd28AZ1v9xj174yb6knwjM1XKSr94AhzNai3AhWOUkwct2GodxzScqeRxXlT8yX2CCE8W9H10kLnhujPFV8pEdWALOPuES1kPqwv3-HqlIdxo5f20-te7fVuVnAEApLSS5vDlvm_jY1NYr-Z8q6DDMuMppTxtMyyI-kC218nhNQTfYTv_B2Aa3qvoMwT0zquHaZIqMQXj_kK0zkXBMhZ7xkXncxmrcA8HicAx67a2dxa2wQ_AsL5blg5aKalZ3arqA9BMyAkmXGKOPCzHSfjkItmk60P_AXRV4QCSxsere4ibs_XG5fmHbAj6kuVCOZ9pTeLGKfS9bxV7k0II9cPGcxPkvgCO8WEWTcb8TZKT1Hpto66MCyC-/p.jpeg?fv_content=true&size_mode=5',
      largeImgUrl: 'https://uc9fc35f5f6fc3099acf71eab6b7.previews.dropboxusercontent.com/p/thumb/AAxKVeRX1Ln-b_vjii-DuhWzIraZHty-Pf-d2qn9YIcc-gWevhzlbAV6kUbJ3kPzQYBqqzbl2SiFzA_qjH4czkp_9o3NrsOJfw-iuvSmUXSy-H6rsI-lYqg_3sGe19Ie6sJZR0y28GTyMZDCLuB8g1yr8LEI3mcVH9zBye6cCKOHgIhSRHLjGSfMWjfKCOyzOW_ut_2K1K368-SYIwEDdX7iEw1VCNdUpoOnsEDvdIEn0tESRTRO0Z5pOGlD2orOtfaa8aGP4oOKWZ3Qp-s4VKc7xVG5zOIghgtAVK4SF1hw63L1bAwpxChmowzCQMk1Iw3dl6fjM0Z8eAspyvMYo3K_WEJcWoLtFztTDOpINbEXnkO1FsCdOglSKVKaQ98sDUkhm6zKPeiDYVm54dLoyFOK/p.jpeg?fv_content=true&size_mode=5'
    }
  },
  {
    type: 'image',
    content: {
      label: 'Do it!',
      title: 'Just do it!',
      name: 'shia',
      imgUrl: 'http://cdn01.cdn.justjared.com/wp-content/uploads/headlines/2015/01/shia-labeouf-goes-shirtless-dances-in-a-cage-for-sias-elastic-hart.jpg'
    }
  }
];
const mockedManuals = [
  {
    label: 'Core',
    url: 'https://ucc77331d39058a0535bff7eb333.dl.dropboxusercontent.com/cd/0/get/A4AMiLM6gdkqXKbb3tHBcZRw5ty86HXJsO4OcuesKUMfUCCJlWxiF7IGSWgBFU6G80L8NmCDE6rVdqo3FHVyItX0zYtPvvHb_jWMfe2S119_29-8eSwdkddZLedBvaZaS8Q/file?_download_id=8242349601545855921506235691623357441596330239131932725831610892&_notify_domain=www.dropbox.com&dl=1',
  },
  {
    label: 'Expansion 1',
    url: 'https://uc6586f31c2eba187a544b00e61f.dl.dropboxusercontent.com/cd/0/get/A4Aq-ZNRd9-BW1glljjkg6R0BfavVI1OSyd4wX-SAEnncPFcCkvMQlwhJHDoyhiLYDf85CMIriqfMQ_LQSxEdei6GSOEh6fz6su0Clni6FNTbw-eRb20j84REo7H_QNQwcA/file?_download_id=6125930396991278583203285158830609039247436829623749215696156437&_notify_domain=www.dropbox.com&dl=1',
  },
  {
    label: 'Bestiary',
    url: 'https://uc1771f277e9c8ae1bbb56814e8e.dl.dropboxusercontent.com/cd/0/get/A4Bqt5GaAnfzhX_IdRnkKs3stRycwhdvbKmmdK2ck2tDqnvOeGeECj3ji4pEmRn49QeTlugsydy_H-PfbwyLHAiHbtYnYyWOebA9lQl6XXif_s4rW8cF-DMiDcu3OQ5LNUc/file?_download_id=01731084514093306214328505869295927042321246456849656973218777421629&_notify_domain=www.dropbox.com&dl=1',
  }
];

// Styles
// import styles from './Home.module.css';

const Home = ({ user, logOut }) => {
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
    imagesList
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

        {showModal === 'about' && <About />}

        {showModal === 'availableCommands' && <AvailableCommands />}
        {showModal === 'manuals' && <ManualsViewer manualsList={mockedManuals} />}
      </Modal>}
      <MainMenu handleState={handleState} account={userName}/>
      <MainBoard showImages={showImages} />
      <StatusBar
        players={currentPlayers}
        timeSpent={timeSpent}
        sessionNumber={sessionNumber}
        gameName={gameName}
      />
    </div>
  );
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
