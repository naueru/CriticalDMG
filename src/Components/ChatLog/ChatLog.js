// Core
import React, { Component } from 'react';

// Libraries
import PropTypes from 'prop-types';

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

class ChatLog extends Component {
  static propTypes = {
    showImages: PropTypes.func
  };

  static defaultProps = {
    showImages: () => {}
  };

  constructor(props) {
    super(props);
    this.state = {
      selectedItem: null,
      log: [
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
            text: 'Suddenly the doors of the tavern open and a beefy men appears',
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
        }
      ]
    };
  }

  handleSelect = (selected) => {
    const { selectedItem } = this.state,
      newSelected = selectedItem === selected ? null : selected;
    this.setState({ selectedItem: newSelected });
  };

  parseInput = (input = '') => {
    const { log } = this.state,
      parsedInput = inputParser.parse(input);
      log.push(parsedInput);
    this.setState({ log });

  };

  render = () => {
    const { showImages } = this.props,
      { language } = config,
      translations  = getTranslations(language),
      { inputPlaceholder } = translations.chatLog,
      { log, selectedItem } = this.state;
    return (
      <section className={styles.chat}>
        <Log
          log={log}
          handleSelect={this.handleSelect}
          selectedItem={selectedItem}
          showImages={showImages}
        />
        <div className={styles.inputContainer}>
          <CommandInput placeholder={inputPlaceholder} handleSubmit={this.parseInput} />
        </div>
      </section>
    );
  };
}

export default ChatLog;
