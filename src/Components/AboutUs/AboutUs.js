
// React
import React from 'react';

// Config
// import config from '../../CritCore/Config/config';

// Translations
// import getTranslations from '../../CritCore/Translations/Translations.js';

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
  return (
    <div className={styles.aboutUsContainer}>
      <AboutUsIntroduction />
      <AboutUsSlider />
      <AboutUsContributors contributors={contributors} />
      <AboutUsFooter />
    </div>
  );
}

export default AboutUs;
