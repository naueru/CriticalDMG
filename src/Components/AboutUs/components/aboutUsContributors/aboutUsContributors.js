// React
import React from 'react';

// Libraries
import Proptypes from 'prop-types';

// Components
import AboutUsContributorCard from '../aboutUsContributorCard';

// Styles
import styles from './aboutUsContributors.module.css'

const renderCards = (list = [], translations) => {
  return list.map((item = {}, index) => {
    const invertedAlignment = index % 2 !== 0;
    return (
      <li className={styles.contributorsListItem} key={`AboutUsContributor_Card_${index}`}>
        <AboutUsContributorCard
          contributor={item}
          invertedAlignment={invertedAlignment}
          translations={translations}
        />
      </li>
    );
  });
};

const aboutUsContributors = ({ contributors, translations }) => {
  const title = translations.title || '';
  return (
    <section className={styles.contributorsContainer}>
      <h2>{title}</h2>
      <ul className={styles.contributorsList}>
        {renderCards(contributors, translations)}
      </ul>
    </section>
  );
};

aboutUsContributors.propTypes = {
  contributors: Proptypes.array,
  translations: Proptypes.object
};

aboutUsContributors.defaultProps = {
  contributors: [],
  translations: {}
};

export default aboutUsContributors;
