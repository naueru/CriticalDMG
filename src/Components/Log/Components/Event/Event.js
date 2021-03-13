// Core
import React, { useEffect, useState } from 'react';

// Libraries
import PropTypes from 'prop-types';

// Components
import CDMGIcon from '../../../CDMGIcon';

// Styles
import styles from './Event.module.css';

const Event = ({
  autoPlay,
  index,
  imgUrl,
  imgName,
  imgLabel,
  imgTitle,
  sound,
  showImages,
  text,
}) => {

  const [ audioId ] = useState(`Event_sound_${index}`);

  useEffect(() => {
    if (imgName && imgUrl && autoPlay) {showPicture(imgUrl, imgName, imgLabel, imgTitle)};
    if (sound && autoPlay) {playSound(audioId)};
    return;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const playSound = (id, event) => {
    if (event) {
      event.stopPropagation();
    }
    let audio = document.getElementById(id);
    if (audio) {
      audio.play();
    }
    return;
  };

  const showPicture = (imgUrl, name, label, title, event) => {
    if (event) {
      event.stopPropagation();
    }
    const img = {
      type: 'image',
      content: {
        label,
        title,
        imgUrl,
        name
      }
    };
    return showImages([img]);
  };

  const renderMedia = imgUrl || sound;

  return (
    <div className={styles.eventContainer}>
      <p className={styles.eventText}>{text}</p>
      {renderMedia && <div className={styles.eventMediaContainer}>
        {imgUrl && <button onClick={(e) => showPicture(imgUrl, imgName, imgLabel, imgTitle, e)} className={styles.eventMediaBtn}>
          <CDMGIcon name={'picture'}/>
        </button>}
        {sound && <button onClick={(e) => playSound(audioId, e)} className={styles.eventMediaBtn}>
          <CDMGIcon name={'sound'}/>
        </button>}
        {sound && <audio id={audioId} src={sound}>
          Your browser does not support the <code>audio</code> element.
        </audio>}
      </div>}
    </div>
  );
};

Event.propTypes = {
  index: PropTypes.number,
  text: PropTypes.string,
  imgUrl: PropTypes.string,
  imgName: PropTypes.string,
  sound: PropTypes.string,
  showImages: PropTypes.func,
};

Event.defaultProps = {
  index: 0,
  text: '',
  imgUrl: '',
  imgName: '',
  sound: '',
  showImages: () => {},
};

export default Event;
