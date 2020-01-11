// Core
import React, { Fragment } from 'react';

// Libraries
import PropTypes from 'prop-types';

// Components
import { GlassMagnifier } from "react-image-magnifiers";
import TabsContainer from '../TabsContainer';

// Styles
import styles from './MapViewer.module.css';

const MapViewer = ({maps, onClick}) => {
  const mapList = maps.map((map) => {
    const { label, smallImgUrl, largeImgUrl } = map;
    return {
      label,
      content: (
        <Fragment>
          <GlassMagnifier
            imageSrc={smallImgUrl}
            imageAlt={label}
            largeImageSrc={largeImgUrl}
            magnifierSize="50%"
          />
        </Fragment>
      )
    };
  });
  return (
    <div
      className={styles.mapViewerContainer}
      onClick={onClick}
    >
      <TabsContainer
        tabs={mapList}
      />
    </div>
  );
}

MapViewer.propTypes = {
  maps: PropTypes.array,
};

MapViewer.defaultProps = {
  maps: []
}

export default MapViewer;
