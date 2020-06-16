// React
import React from 'react';

// Libraries
import Proptypes from 'prop-types';

// Components
import Branding from '../../../branding';

// Styles
import styles from './aboutUsFooter.module.css';

const AboutUsFooter = ({ translations }) => {
  const contactUs = translations.contactUs;
  return (
    <footer className={styles.aboutUsFooterContainer}>
      <div className={styles.branding}>
      <Branding
        logoSize={{ width: '6rem', height: '6rem' }}
        alignment="row"
        shadow
      />
      </div>
      <section className={styles.contact}>
        <div className={styles.media}>
          <button onClick={() => alert('Comming soon')}>f</button>
          <button onClick={() => alert('Comming soon')}>t</button>
          <button onClick={() => alert('Comming soon')}>Y</button>
          <button onClick={() => alert('Comming soon')}>T</button>
          <button onClick={() => alert('Comming soon')}>i</button>
          <button onClick={() => alert('Comming soon')}>in</button>
        </div>
        <button className={styles.contactUs} onClick={() => alert('Comming soon')}>{contactUs}</button>
      </section>
    </footer>
  );
};

AboutUsFooter.propTypes = {
  translations: Proptypes.object
};

AboutUsFooter.defaultProps = {
  translations: {}
};

export default AboutUsFooter;
