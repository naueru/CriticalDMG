// Core
import React, { useState } from 'react';

// Store
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import { ActionCreators } from '../../actions';

// Libraries
import PropTypes from 'prop-types';
import _get from 'lodash/get';

// Config
import config from '../../CritCore/Config/config';

// Translations
import getTranslations from '../../CritCore/Translations/Translations.js';

// Parsers
import inputParser from './inputParser';

// Components
import Log from '../Log';
import CommandInput from '../CommandInput';

// Mock
import snd from '../../../src/assets/sounds/mocks/door.ogg';

// Styles
import styles from './ChatLog.module.css';

const ChatLog = ({user, showImages}) => {

  const [ selectedItem, setSelectedItem ]           = useState(null);
  const [ defaultInput, setDefaultInput ]           = useState('');
  const [ inputHistory, setInputHistory ]           = useState([]);
  const [ inputHistoryIndex, setInputHistoryIndex ] = useState(0);
  const [ log, setLog ]                             = useState([
    {
      type: 'message',
      content:{
        text: 'Bartender, bring me a beer!.',
        actionModifier: 'Yelling',
        picture: '',
        icon: 'warrior',
        character: 'Valdamir'
      }
    },
    {
      type: 'roll',
      content:{
        total: 11,
        results: [5, 4],
        dices: 2,
        faces: 6,
        modifier: 2,
        character: 'Valdamir'
      }
    },
    {
      type: 'message',
      content:{
        text: 'Hey, careful with that.',
        actionModifier: '',
        picture: '',
        icon: 'mage',
        character: 'Meriadoc'
      }
    },
    {
      type: 'event',
      content:{
        text: 'Suddenly the doors of the tavern open and a beefy man appears',
        image: {
          label: 'Do it!',
          title: 'Just do it!',
          url: 'http://cdn01.cdn.justjared.com/wp-content/uploads/headlines/2015/01/shia-labeouf-goes-shirtless-dances-in-a-cage-for-sias-elastic-hart.jpg',
          name: 'beefy'
        },
        sound: snd,
        autoPlay: false
      }
    },
    {
      type: 'message',
      content:{
        text: 'Guys, look, somebody has arrived.',
        actionModifier: 'Whispering',
        picture: '',
        icon: 'bard',
        character: 'Drako'
      }
    },
    {
      type: 'error',
      content:{
        text: 'The command was not understood',
      }
    }
  ]);

  const handleSelect = (selected) => {
    const newSelected = selectedItem === selected ? null : selected;
      setSelectedItem(newSelected);
  };

  const handleHistory = (action, callback) => {
    const newIndex = action === 'increase' ? Math.min(inputHistory.length, inputHistoryIndex + 1) : Math.max(0, inputHistoryIndex - 1);
    setInputHistoryIndex(newIndex);
    setDefaultInput(inputHistory[newIndex]);
    callback(inputHistory[newIndex] || '');
  };

  const parseInput = (input = '') => {
    const { language } = config,
      parsedInput = inputParser.parse(input, user, language);
      log.push(parsedInput);
      inputHistory.push(input);
      let inputHistoryIndex = inputHistory.length;
      setLog(log);
      setInputHistory(inputHistory);
      setInputHistoryIndex(inputHistoryIndex);
      setDefaultInput('');
  };

  const { language }      = config,
    translations          = getTranslations(language),
    { inputPlaceholder }  = translations.chatLog;

  return (
    <section className={styles.chat}>
      <Log
        log={log}
        handleSelect={handleSelect}
        selectedItem={selectedItem}
        showImages={showImages}
      />
      <div className={styles.inputContainer}>
        <CommandInput
          placeholder={inputPlaceholder}
          handleSubmit={parseInput}
          handleHistory={handleHistory}
          defaultInput={defaultInput}
        />
      </div>
    </section>
  );
};

ChatLog.propTypes = {
  showImages: PropTypes.func
};

ChatLog.defaultProps = {
  showImages: () => {}
};

const mapStateToProps = state => ({
  // FILTERED PROPS STORE HERE
  user: _get(state, 'session.user'),
});

const mapDispatchToProps = (dispatch) => {
  // Filter used actions
  // const { checkCredentials } = ActionCreators;
  return bindActionCreators(
    {
      // FILTERED ACTIONS HERE
      postEntries: () => {console.log('Implement this')},
    },
    dispatch,
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ChatLog);
