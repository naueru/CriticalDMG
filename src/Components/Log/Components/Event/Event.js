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
    text: PropTypes.string,
    imgUrl: PropTypes.string,
    imgName: PropTypes.string,
    sound: PropTypes.string
  };

  static defaultProps = {
    text: '',
    imgUrl: '',
    imgName: '',
    sound: ''
  };
  constructor(props) {
    super(props);
    const { index } = this.props
    this.state = {
      audioId: `Event_sound_${index}`
    };
  }

  componentDidMount = () =>{
    const { imgName, imgUrl, sound, autoPlay } = this.props;

    if (imgName && imgUrl && autoPlay) {this.showPicture(imgUrl, imgName)};
    if (sound && autoPlay) {this.playSound(sound)};

    return;
  };

  playSound = (id) => {
    let audio = document.getElementById(id);
    if (audio) {
      audio.play();
    }
    return;
  };

  showPicture = (picture, alt) => {
    return alert(`Displaying event image: ${picture} alt: ${alt}`);
  };

  render = () => {
    const {
      text,
      imgUrl,
      imgName,
      sound,
    } = this.props,
    { audioId } = this.state,
    renderMedia = imgUrl || sound;
    return (
      <div className={styles.eventContainer}>
        <p className={styles.eventText}>{text}</p>
        {renderMedia && <div className={styles.eventMediaContainer}>
          {imgUrl && <button onClick={() => this.showPicture(imgUrl, imgName)} className={styles.eventMediaBtn}>
            <CDMGIcon name={'picture'}/>
          </button>}
          {sound  && <button onClick={() => this.playSound(audioId)} className={styles.eventMediaBtn}>
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