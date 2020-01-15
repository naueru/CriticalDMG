// Core
import React, { Component } from 'react';

// Libraries
import PropTypes from 'prop-types';

// Components
import Message from './Components/Message';

// Styles
import styles from './Log.module.css';

class Log extends Component {
  static propTypes = {
    list: PropTypes.array
  };

  static defaultProps = {
    list: []
  };
  parseList = (list = []) => {
    return list.map((item = {}) => {
      let comp,
      { type, text, picture, icon } = item;

      switch(type) {
        case 'message':
          comp = (
            <li className={styles.logRegistry}>
              <Message
                message={text}
                picture={picture}
                icon={icon}
              />
            </li>
          );
          break;
        default:
          break;
      }
      return comp;
    });
  };

  render = () => {
    return (
      <ul className={styles.logContainer}>
        {this.parseList([
          {
            type: 'message',
            text: '*YELLS* Bartender, bring me a beer!.',
            picture: '',
            icon: 'warrior'
          },
          {
            type: 'coso'
          },
          {
            type: 'message',
            text: 'Hey, careful with that.',
            picture: '',
            icon: 'mage'
          },
          {
            type: 'message',
            text: '*WHISPERS* Guys, look, somebody has arrived.',
            picture: '',
            icon: 'bard'
          }
        ])}
      </ul>
    );
  };
}

export default Log;
