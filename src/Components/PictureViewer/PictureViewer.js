// Core
import React from 'react';

// Libraries
import PropTypes from 'prop-types';

// Config
import config from '../../CritCore/Config/config';

// Components
import { GlassMagnifier } from "react-image-magnifiers";
import TabsContainer from '../TabsContainer';

// Styles
import styles from './PictureViewer.module.css';

const PictureViewer = ({imageList, onClick}) => {
  const contentList = imageList.map((item) => {
    const { type, content } = item,
    { label } = content;
    let comp;

    switch (type) {
      case 'image':
        const { title, imgUrl, name} = content;
        comp = {
          label,
          content: (
            <>
              <h4>{title}</h4>
              <img src={imgUrl} alt={name} />
            </>
          )
        }
        break;
      case 'map':
        const { smallImgUrl, largeImgUrl } = content,
          { pictureViewer } = config,
          {magnifierSize} = pictureViewer;
        comp = {
          label,
          content: (
            <>
              <GlassMagnifier
                imageSrc={smallImgUrl}
                imageAlt={label}
                largeImageSrc={largeImgUrl}
                magnifierSize={magnifierSize}
                allowOverflow
              />
            </>
          )
        }
        break;
      default:
        break;
    }
    return comp;
  });

  return (
    <div
      className={styles.pictureViewerContainer}
      onClick={onClick}
    >
      <TabsContainer
        tabs={contentList}
      />
    </div>
  );
};

PictureViewer.propTypes = {
  imageList: PropTypes.array,
};

PictureViewer.defaultProps = {
  imageList: [],
};

export default PictureViewer;
