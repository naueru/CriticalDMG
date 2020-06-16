
// React
import React from 'react';

// Config
import config from '../../CritCore/Config/config';

// Translations
import getTranslations from '../../CritCore/Translations/Translations.js';

// Components
import AboutUsIntroduction from './components/aboutUsIntroduction';
import AboutUsSlider from './components/aboutUsSlider';
import AboutUsContributors from './components/aboutUsContributors';
import AboutUsFooter from './components/aboutUsFooter';

// Styles
import styles from './AboutUs.module.css';

// Contributors
import contributors from './contributorsConstants';

const AboutUs = () => {
  const
  { language }              = config,
  translations              = getTranslations(language),
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
}

export default AboutUs;
