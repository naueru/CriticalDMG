// Core
import React, { useCallback, useEffect, useState } from 'react';

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

const Log = ({ handleSelect, log, selectedItem, showImages }) => {

  const [ isAutoScrollEnabled, setIsAutoScrollEnabled ] = useState(true);
  const [ isAutoScrolling, setIsAutoScrolling ] = useState(false);
  const [ isAtTheEnd, setIsAtTheEnd ] = useState(true);

  let dummy;

  const parseList = (list = []) => {
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

// setear valor con setAlgo para cambiar el valor original
//antes de anaizar el "no esta abajo" - estoy habilitado o no estoy

//lleva el scroll al final
  const scrollToBottom = async () => {
    if (!isAtTheEnd) {
      setIsAutoScrolling(true);
    }
    dummy.scrollIntoView({ block: "end", behavior: "smooth" });
  };

  // const scrollToBottom = useCallback(() => {
  //   console.log('isAutoScrollEnabled', isAutoScrollEnabled,isAutoScrolling)
  //   console.log('log', log)
  //   if(isAutoScrollEnabled){
  //     if(isAutoScrolling) {
  //       setIsAutoScrolling(true);
  //     }
  //     dummy.scrollIntoView({ behavior: "smooth" });
  //   }
  // },[isAutoScrolling, isAutoScrollEnabled, dummy, log]);

//bloquea el autoscroll de la maquina
  const lockAutoScroll = () => {
    setIsAutoScrollEnabled(false);
  };

//habilita el scroll de la maquina
  const enableAutoScroll = () => {
    setIsAutoScrollEnabled(true);
  };

//revisa la posicion del scroll
  const chekScrollPosition = (e) => {
    const isAtTheBottom = (Math.floor(e.target.scrollTop) + e.target.offsetHeight) >= (e.target.scrollHeight - 2);
    // const isAtTheBottom = (Math.floor(e.target.scrollTop) + e.target.offsetHeight) === e.target.scrollHeight;
    setIsAtTheEnd(isAtTheBottom);

    if (isAtTheBottom) {
      enableAutoScroll();
      // if (isAutoScrolling) {
        setIsAutoScrolling(false);
      // }
    } else {
      if (!isAutoScrolling) {
        lockAutoScroll();
      }
    }
  };

  useEffect(() => {
    if (isAutoScrollEnabled) {
      scrollToBottom();
    }
  });

  return (
    <ul className={styles.logContainer} onScroll={chekScrollPosition}>
      <pre style={{position: 'absolute', background: 'white'}}>{`IATB = ${isAtTheEnd} | isEnabled = ${isAutoScrollEnabled} | isScrolling = ${isAutoScrolling}`}</pre>
      {parseList(log)}
      <li>
        <div ref={(element) => { dummy = element; }}/>
      </li>
    </ul>
  );
}

Log.propTypes = {
  log: PropTypes.array,
  handleSelect: PropTypes.func,
  selectedItem: PropTypes.number,
  showImages: PropTypes.func
};

Log.defaultProps = {
  log: [],
  handleSelect: () => {},
  selectedItem: 0,
  showImages: () => {}
};

export default Log;
