// Core
import React from 'react';

// Libraries
import PropTypes from 'prop-types';

// Components
import TabsContainer from '../TabsContainer';

// Styles
import styles from './MapViewer.module.css';

const MapViewer = ({maps, onClick}) => {
  const mapList = maps.map((map) => {
    const { label, url } = map;
    return {
      label,
      content: <img src={url} alt={label} className={styles.image} />
    };
  });
  return (
    <div
      className={styles.mapViewerContainer}
      onClick={onClick}
    >
      <TabsContainer
        tabs={mapList}
        width="80vw"
        height="80vh"
      />
    </div>
  );
}

// ToDo: Define by props if uses close button, wrapper and type of transition
MapViewer.propTypes = {
  maps: PropTypes.array,
  onClose: PropTypes.func
};

MapViewer.defaultProps = {
  onClose: () => {}
}

export default MapViewer;
