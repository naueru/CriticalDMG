// Core
import React, { useState } from 'react';

// Libraries
import PropTypes from 'prop-types';

//Styles
import styles from './Tooltip.module.css';

const Tooltip = ({ message, children, orientation, maxHeight, maxWidth }) => {

  const textStyles = {};

  if (maxHeight) {textStyles.maxHeight = maxHeight};
  if (maxWidth) {textStyles.maxWidth = maxWidth};

  const [ visible, setVisible ] = useState(false);
  const [ fixOrientation, setFixOrientatiooin ] = useState('');

  const toogleVisibility = () => {
    return setVisible(!visible);
  };

  const fixDirection = (event) => {
    setFixOrientatiooin('');
    switch (orientation) {
      case 'top':
        if (event.clientY < (window.innerHeight / 3)) {
          setFixOrientatiooin('bottom');
        }
        break;
      case 'bottom':
        if (event.clientY > (window.innerHeight * 0.66)) {
          setFixOrientatiooin('top');
        }
        break;
      case 'left':
        if (event.clientX < (window.innerWidth / 3)) {
          setFixOrientatiooin('right');
        }
        break;
      case 'right':
        if (event.clientX > (window.innerWidth * 0.66)) {
          setFixOrientatiooin('left');
        }
        break;
      default:
        break;
    }
    return
  };

  return (
  <span className={styles.tooltipContainer} onClick={ toogleVisibility } onMouseEnter={fixDirection}>
    <span className={`${styles.tooltipMsg} ${styles[fixOrientation || orientation]} ${visible ? styles.visible : ''}`} >
      <p className={styles.tooltipText} style={{...textStyles}}>
        {message}
      </p>
    </span>
    {children}
  </span>
  );
};

Tooltip.propTypes = {
  children: PropTypes.object.isRequired,
  maxHeight: PropTypes.string,
  maxWidth: PropTypes.string,
  message: PropTypes.string,
  orientation: PropTypes.string
};

Tooltip.defaultProps = {
  maxHeight: '',
  maxWidth: '',
  message: '',
  orientation: 'top'
}

export default Tooltip;
