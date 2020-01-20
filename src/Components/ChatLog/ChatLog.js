// Core
import React, { Component } from 'react';

// Libraries
import PropTypes from 'prop-types';

// Config
import config from '../../CritCore/Config/config';

// Translations
import getTranslations from '../../CritCore/Translations/Translations.js';

// Components
import Log from '../Log';

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
      selectedItem: null
    };
  }

  handleSelect = (selected) => {
    const { selectedItem } = this.state,
      newSelected = selectedItem === selected ? null : selected;
    this.setState({ selectedItem: newSelected });
  };

  render = () => {
    const { showImages } = this.props,
      { language } = config,
      translations  = getTranslations(language),
      { inputPlaceholder } = translations.chatLog,
      { logList, selectedItem } = this.state;
    return (
      <section className={styles.chat}>
        <Log
          list={logList}
          handleSelect={this.handleSelect}
          selectedItem={selectedItem}
          showImages={showImages}
        />
        <input placeholder={inputPlaceholder} className={styles.chatInput} />
      </section>
    );
  };
}

export default ChatLog;
