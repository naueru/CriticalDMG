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
    this.state = {};
  }

  render = () => {
    const translations  = getTranslations('es'),
      { inputPlaceholder } = translations.chatLog,
      { logList } = this.state;
    return (
      <div className={styles.chat}>
        <Log list={logList}/>
        <input placeholder={inputPlaceholder} className={styles.chatInput} />
      </div>
    );
  };
}

export default ChatLog;
