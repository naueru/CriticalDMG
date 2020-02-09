// Core
import React, { Component } from 'react';

// Libraries
import PropTypes from 'prop-types';

// Components
import CDMGIcon from '../../../CDMGIcon';

// Styles
import styles from './Event.module.css';

class Event extends Component {
  static propTypes = {
    index: PropTypes.number,
    text: PropTypes.string,
    imgUrl: PropTypes.string,
    imgName: PropTypes.string,
    sound: PropTypes.string,
    showImages: PropTypes.func
  };

  static defaultProps = {
    index: 0,
    text: '',
    imgUrl: '',
    imgName: '',
    sound: '',
    showImages: () => {}
  };
  constructor(props) {
    super(props);
    const { index } = this.props
    this.state = {
      audioId: `Event_sound_${index}`
    };
  }

  componentDidMount = () =>{
    const { imgName, imgUrl, imgLabel, imgTitle, sound, autoPlay } = this.props,
      { audioId } = this.state;

    if (imgName && imgUrl && autoPlay) {this.showPicture(imgUrl, imgName, imgLabel, imgTitle)};
    if (sound && autoPlay) {this.playSound(audioId)};

    return;
  };

  playSound = (id, event) => {
    if (event) {
      event.stopPropagation();
    }
    let audio = document.getElementById(id);
    if (audio) {
      audio.play();
    }
    return;
  };

  showPicture = (imgUrl, name, label, title, event) => {
    if (event) {
      event.stopPropagation();
    }
    const { showImages } = this.props,
    img = {
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

  render = () => {
    const {
      text,
      imgUrl,
      imgName,
      imgLabel,
      imgTitle,
      sound
    } = this.props,
    { audioId } = this.state,
    renderMedia = imgUrl || sound;
    return (
      <div className={styles.eventContainer}>
        <p className={styles.eventText}>{text}</p>
        {renderMedia && <div className={styles.eventMediaContainer}>
          {imgUrl && <button onClick={(e) => this.showPicture(imgUrl, imgName, imgLabel, imgTitle, e)} className={styles.eventMediaBtn}>
            <CDMGIcon name={'picture'}/>
          </button>}
          {sound  && <button onClick={(e) => this.playSound(audioId, e)} className={styles.eventMediaBtn}>
            <CDMGIcon name={'sound'}/>
          </button>}
          {sound && <audio id={audioId} src={sound}>
            Your browser does not support the <code>audio</code> element.
          </audio>}
        </div>}
      </div>
    );
  };
}

export default Event;
