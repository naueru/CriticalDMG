// React
import React from 'react';

// Libraries
import Proptypes from 'prop-types';

// Styles
import styles from './conversationalDots.module.css';

const renderDots = (value, max, size) => {
  let dots = [];
  for (let i = 0; i < max; i++) {
    let dotClass = `${styles.dot} ${styles[size]} ${i < value ? styles.filled : styles.empty}`;
    dots.push(<span key={`ConversationalDot_key_${i}`} className={dotClass} />)
  }
  return dots;
};

const ConversationalDots = ({ label, description, value, max, alignment, size }) => {
  const
    containerStyles = `${styles.mainContainer} ${styles[alignment]}`,
    labelStyles     = `${styles.label} ${styles[size]}`;
  return (
    <div className={containerStyles}>
      <h4 className={labelStyles} title={description}>{label}</h4>
      <div className={styles.dotsContainer}>
        {renderDots(value, max, size)}
      </div>
    </div>
  );
};

ConversationalDots.propTypes = {
  label: Proptypes.string,
  description: Proptypes.string,
  value: Proptypes.number,
  max: Proptypes.number,
  alignment: Proptypes.string,
  size: Proptypes.string
};

ConversationalDots.defaultProps = {
  label: '',
  description: '',
  value: 0,
  max: 5,
  alignment: 'row',
  size: 'small'
};

export default ConversationalDots;
