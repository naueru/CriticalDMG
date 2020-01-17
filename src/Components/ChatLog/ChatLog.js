// Core
import React, { Component } from 'react';

// Translations
import getTranslations from '../../CritCore/Translations/Translations.js';

// Components
import Log from '../Log';

// Styles
import styles from './ChatLog.module.css';

class ChatLog extends Component {
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
  }

  render = () => {
    const translations  = getTranslations('es'),
      { inputPlaceholder } = translations.chatLog,
      { logList, selectedItem } = this.state;
    return (
      <div className={styles.chat}>
        <Log list={logList} handleSelect={this.handleSelect} selectedItem={selectedItem} />
        <input placeholder={inputPlaceholder} className={styles.chatInput} />
      </div>
    );
  };
}

export default ChatLog;
