// Core
import React, { Component } from 'react';

// Libraries
import PropTypes from 'prop-types';

// Parsers
import ItemsPropsParser from './ItemsPropsParser';

// Components
import Message from './Components/Message';
import Roll from './Components/Roll';
import Event from './Components/Event';

// Mock
import snd from '../../../src/assets/sounds/mocks/door.ogg';

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
      { type, content } = item,
      key = `Log_entry_${index}`;

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
        case 'event':
          comp = (
            <Event {...ItemsPropsParser.parseEventProps(content)} />
          );
          break;
        default:
          comp = null;
          break;
      }
      return (
        comp && <li
          key={key}
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
              modfier: 2,
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
        ])}
      </ul>
    );
  };
}

export default Log;
