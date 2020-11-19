// Core
import React, { useState } from 'react';

// Libraries
import PropTypes from 'prop-types';

//Styles
import styles from './Tooltip.module.css';

const Tooltip = ({ message, children, orientation }) => {

  const [ visible, setVisible ] = useState(false);

  const toogleVisibility = () => {
    return setVisible(!visible);
  }

  return (
  <span className={styles.tooltipContainer} onClick={ toogleVisibility }>
    <span className={`${styles.tooltipMsg} ${styles[orientation]} ${visible ? styles.visible : ''}`} >
      {message}
    </span>
      {children}
  </span>
  );
};

Tooltip.propTypes = {
  message: PropTypes.string,
  visible: PropTypes.bool
};

Tooltip.defaultProps = {
  message: '',
  visible: false
}

export default Tooltip;
