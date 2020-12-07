// Core
import React from 'react';

// Libraries
import PropTypes from 'prop-types';

// Components
import CDMGIcon from '../../../CDMGIcon';
import Tooltip from '../../../Tooltip';

// Styles
import styles from './Roll.module.css';

const Roll = ({
    total,
    results,
    dices,
    faces,
    modifier,
    character
  }) => {

  const mod = ((modifier >= 0) && `+${modifier}`) || modifier,
    rolls   = `[${results.join(', ')}]`,
    prefix  = `${character} rolled `,
    sufix   = ` (${dices}d${faces}${mod})`;
  return (
    <div className={styles.rollContainer} >
      <span className={styles.pictureContainer}>
        <CDMGIcon name={'dice'} />
      </span>
      <span className={styles.rollText}>
        {prefix}
        <Tooltip message={rolls} orientation="top" maxWidth="100px" maxHeight="50px">
          <span className={styles.rollResults}>{total}</span>
        </Tooltip>
        {sufix}
      </span>
    </div>
  );
}

Roll.propTypes = {
  total: PropTypes.number,
  results: PropTypes.array,
  dices: PropTypes.number,
  faces: PropTypes.number,
  modifier: PropTypes.number,
  character: PropTypes.string
};

Roll.defaultProps = {
  total: 0,
  results: [],
  dices: 0,
  faces: 0,
  modifier: 0,
  character: ''
};

export default Roll;
