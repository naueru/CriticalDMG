// React
import React, { useState } from 'react';

// Libraries
import Proptypes from 'prop-types';

// Components
import AboutUsContributorCharSheet from '../aboutUsContributorCharSheet';

// Styles
import styles from './aboutUsContributorCard.module.css';

const AboutUsContributorCard = ({ contributor, invertedAlignment }) => {
  const [ state, setState ] = useState({ showCharacterSheet: false });

  const showSheet = (value) => {
    return setState({ showCharacterSheet: value })
  };

  const
    { showCharacterSheet }  = state,
    alignmentStyle          = invertedAlignment ? styles.right : styles.left,
    containerStyles         = `${styles.cardContainer} ${alignmentStyle}`,
    dataStyles              = `${styles.data} ${alignmentStyle}`;

  return (
    <div className={containerStyles} onMouseOver={() => showSheet(true)} onMouseLeave={() => showSheet(false)}>
      {showCharacterSheet && <AboutUsContributorCharSheet contributor={contributor} onLeave={() => showSheet(false)}/>}
      <img src={contributor.img} alt='profile' className={styles.profile} />
      <div className={dataStyles}>
        <h3 className={styles.name}>{contributor.name}</h3>
        <p className={styles.role}>{contributor.role}</p>
      </div>
    </div>
  );
};

AboutUsContributorCard.propTypes = {
  contributor: Proptypes.object,
  invertedAlignment: Proptypes.bool
};

AboutUsContributorCard.defaultProps = {
  contributor: {},
  invertedAlignment: false
};

export default AboutUsContributorCard;
