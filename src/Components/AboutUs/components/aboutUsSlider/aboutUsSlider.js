//React
import React from 'react';

// Libraries
import Proptypes from 'prop-types';

// Components
import { Carousel } from 'react-responsive-carousel';

// Styles
import styles from './aboutUsSlider.module.css';

// Mock
const maps = require('../../../../assets/img/mocks/aboutMaps.png');
const log = require('../../../../assets/img/mocks/aboutLog.png');

const getFeatures = (translations = {}) => {
  return [
    {
      src: maps,
      label: translations.maps
    },
    {
      src: log,
      label: translations.log
    }
  ];
};

const renderSlides = (list = []) => {
  return list.map((item = {}, index) => {
    return (
      <div key={`About_Slides_${index}`}>
        <img
          src={item.src}
          alt={item.label}
          className={styles.image}
        />
        <p className="legend">{item.label}</p>
      </div>
    );
  });
};

const AboutUsSlider = ({ translations }) => {
  const
  title                 = translations.title || '',
  featuresTranslations  = translations.features || {};
  return (
    <section className={styles.sliderContaier}>
      <h2>{title}</h2>
      <Carousel
        thumbs={false}
        showThumbs={false}
        swipeable={true}
        autoPlay={true}
        stopOnHover={true}
        infiniteLoop={true}
        emulateTouch={true}
      >
        {renderSlides(getFeatures(featuresTranslations))}
      </Carousel>
    </section>
  );
};

AboutUsSlider.propTypes = {
  translations: Proptypes.object
};

AboutUsSlider.defaultProps = {
  translations: {}
};

export default AboutUsSlider;
