// Core
import React from 'react';

// Libraries
import PropTypes from 'prop-types';

// Components
import { PDFReader } from 'reactjs-pdf-reader';
import TabsContainer from '../TabsContainer';

// Styles
import styles from './ManualsViewer.module.css';

const ManualsViewer = ({manualsList, onClick}) => {
  const contentList = manualsList.map((item) => {
    const { label, url } = item,
      comp = {
          label,
          content: (
              <div
                className={styles.pdfContainer}
                onClick={(e) => e.stopPropagation()}
              >
                <PDFReader
                  url={url}
                  onDocumentComplete={() => console.log('Manual loaded')}
                />
              </div>
          )
        }
    return comp;
  });

  return (
    <div
      className={styles.manualsViewerContainer}
      onClick={onClick}
    >
      <TabsContainer
        tabs={contentList}
      />
    </div>
  );
};

ManualsViewer.propTypes = {
  manualsList: PropTypes.array,
};

ManualsViewer.defaultProps = {
  manualsList: [],
}

export default ManualsViewer;
