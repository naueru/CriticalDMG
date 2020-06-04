// React
import React from 'react';

// Libraries
import PropTypes from 'prop-types';

// Components
import Logo from '../logo';

// Styles
import styles from './branding.module.css';

const Branding = ({ alignment, logoSize, shadow, fontSize }) => {
  const
  { width, height } = logoSize,
  shadowStyle       = shadow ? styles.shadow : '',
  containerStyles   = `${styles.brandingContainer} ${styles[alignment]}`,
  headlineClass     = `${styles.headline} ${shadowStyle}`,
  headlineStyles    = { fontSize: fontSize };
  return (
    <h1 className={containerStyles}>
      <div
        className={styles.logoContainer}
        style={{ width, height }}
      >
        <Logo />
      </div>
      <span
        className={headlineClass}
        style={{...headlineStyles}}
      >
        CriticalDMG
      </span>
    </h1>
  );
};

Branding.propTypes = {
  alignment: PropTypes.string,
  logoSize: PropTypes.object,
  shadow: PropTypes.bool,
  fontSize: PropTypes.string
};

Branding.defaultProps = {
  alignment: 'row',
  logoSize: {
    width: '10rem',
    height: '10rem'
  },
  shadow: false,
  fontSize: '30px'
};

export default Branding;
