
// React
import React from 'react';

// Store
import { connect } from 'react-redux';

// Libraries
import PropTypes from 'prop-types';

// Components
import AboutUsIntroduction from './components/aboutUsIntroduction';
import AboutUsSlider from './components/aboutUsSlider';
import AboutUsContributors from './components/aboutUsContributors';
import AboutUsFooter from './components/aboutUsFooter';

// Styles
import styles from './AboutUs.module.css';

// Contributors
import contributors from './contributorsConstants';

const AboutUs = ({ translations }) => {
  const
  aboutUsTranslations       = translations.aboutUs || {},
  introductionTranslations  = aboutUsTranslations.introduction,
  sliderTranslations        = aboutUsTranslations.slider,
  contributorsTranslations  = aboutUsTranslations.contributors,
  footerTranslations        = aboutUsTranslations.footer;
  return (
    <div className={styles.aboutUsContainer}>
      <AboutUsIntroduction translations={introductionTranslations} />
      <AboutUsSlider translations={sliderTranslations} />
      <AboutUsContributors contributors={contributors} translations={contributorsTranslations} />
      <AboutUsFooter translations={footerTranslations} />
    </div>
  );
};

AboutUs.propTypes = {
  translations: PropTypes.object
};

const mapStateToProps = store => ({
  // FILTERED PROPS STORE HERE
  translations: store?.applicationSettings?.translations,
});

export default connect(
  mapStateToProps
)(AboutUs);
