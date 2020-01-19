// Core
import React, { Component } from 'react';

// Libraries
import PropTypes from 'prop-types';

// Components
import CDMGIcon from '../../../CDMGIcon';

// Styles
import styles from './Roll.module.css';

class Roll extends Component {
  static propTypes = {
    total: PropTypes.number,
    results: PropTypes.array,
    dices: PropTypes.number,
    faces: PropTypes.number,
    modfier: PropTypes.number,
    character: PropTypes.string
  };

  static defaultProps = {
    total: 0,
    results: [],
    dices: 0,
    faces: 0,
    modfier: 0,
    character: ''
  };
  constructor(props) {
    super(props);
    this.state = {};
  }
  render = () => {
    const {
      total,
      results,
      dices,
      faces,
      modfier,
      character
    }       = this.props,
    mod     = ((modfier >= 0) && `+${modfier}`) || modfier,
    rolls   = `[${results.join(', ')}]`,
    prefix  = `${character} rolled `,
    sufix   = ` (${dices}d${faces}${mod})`;
    return (
      <div className={styles.rollContainer} >
        <span className={styles.pictureContainer}>
          <CDMGIcon name={'dice'} />
        </span>
        <p className={styles.rollText}>
          {prefix}<span className={styles.rollResults} title={rolls}>{total}</span>{sufix}
        </p>
      </div>
    );
  };
}

export default Roll;
