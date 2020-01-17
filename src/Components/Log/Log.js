// Core
import React, { Component } from 'react';

// Libraries
import PropTypes from 'prop-types';

// Parsers
import ItemsPropsParser from './ItemsPropsParser';

// Components
import Message from './Components/Message';
import Roll from './Components/Roll';

// Styles
import styles from './Log.module.css';

class Log extends Component {
  static propTypes = {
    list: PropTypes.array,
    handleSelect: PropTypes.func,
    selectedItem: PropTypes.number
  };

  static defaultProps = {
    list: [],
    handleSelect: () => {},
    selectedItem: 0
  };

  parseList = (list = []) => {
    const { handleSelect, selectedItem } = this.props;
    return list.map((item = {}, index) => {
      let comp,
      { type, content } = item;

      switch(type) {
        case 'message':
          comp = (
            <Message {...ItemsPropsParser.parseMsgProps(content)} />
          );
          break;
        case 'roll':
          comp = (
            <Roll {...ItemsPropsParser.parseRollProps(content)} />
          );
          break;
        default:
          break;
      }
      return (
        <li
          className={`${styles.logRegistry} ${(selectedItem === index) && styles.selected}`}
          onClick={() => handleSelect(index)}
        >
          {comp}
        </li>
      );
    });
  };

  render = () => {
    return (
      <ul className={styles.logContainer}>
        {this.parseList([
          {
            type: 'message',
            content:{
              text: '*YELLS* Bartender, bring me a beer!.',
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
              modfier: 2,
              character: 'Valdamir'
            }
          },
          {
            type: 'message',
            content:{
              text: 'Hey, careful with that.',
              picture: '',
              icon: 'mage',
              character: 'Meriadoc'
            }
          },
          {
            type: 'message',
            content:{
              text: '*WHISPERS* Guys, look, somebody has arrived.',
              picture: '',
              icon: 'bard',
              character: 'Drako'
            }
          }
        ])}
      </ul>
    );
  };
}

export default Log;
