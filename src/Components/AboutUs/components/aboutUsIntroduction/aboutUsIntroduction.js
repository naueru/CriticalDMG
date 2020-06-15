// React
import React from 'react';

// Libraries
import Proptypes from 'prop-types';

// Components
import Branding from '../../../branding';

// Styles
import styles from './aboutUsIntroduction.module.scss';

const AboutUsIntroduction = ({ translations }) => {
  const
  slogan      = translations.slogan || '',
  whatIs      = translations.whatIs || '',
  description = translations.description || '';
  return (
    <section className={styles.aboutUsIntroContainer}>
      <Branding
        logoSize={{ width: '12rem', height: '12rem' }}
        alignment="column"
        shadow
      />
      <p>{slogan}</p>
      <h2>{whatIs}</h2>
      <p className={styles.description}>{description}</p>
    </section>
  )
};

AboutUsIntroduction.propTypes = {
  translations: Proptypes.object
};

AboutUsIntroduction.defaultProps = {
  translations: {}
};

export default AboutUsIntroduction;
