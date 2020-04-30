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
import Error from './Components/Error';


// Styles
import styles from './Log.module.css';

class Log extends Component {
  static propTypes = {
    log: PropTypes.array,
    handleSelect: PropTypes.func,
    selectedItem: PropTypes.number,
    showImages: PropTypes.func
  };

  static defaultProps = {
    log: [],
    handleSelect: () => {},
    selectedItem: 0,
    showImages: () => {}
  };

  parseList = (list = []) => {
    const { handleSelect, selectedItem, showImages } = this.props;
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
            <Event {...ItemsPropsParser.parseEventProps(content)} showImages={showImages} />
          );
          break;
        case 'error':
          comp = (
            <Error {...ItemsPropsParser.parseErrorProps(content)} />
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
    const { log } = this.props;
    return (
      <ul className={styles.logContainer}>
        {this.parseList(log)}
      </ul>
    );
  };
}

export default Log;
