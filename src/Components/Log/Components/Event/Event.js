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
    this.state = {};
  }

  componentDidMount = () =>{
    const { imgName, imgUrl, sound, autoPlay } = this.props;
    if (imgName && imgUrl && autoPlay) {this.playSound(sound)};
    if (sound && autoPlay) {this.playSound(sound)};
    return;
  };

  playSound = (sound) => {
    return alert(`Playing event sound: ${sound}`)
  };

  render = () => {
    const {
      text,
      // imgUrl,
      // imgName,
      // sound
    } = this.props;
    return (
      <div className={styles.eventContainer}>
        <p className={styles.eventText}>{text}</p>
        <div>
          <CDMGIcon />
          <CDMGIcon />
        </div>
      </div>
    );
  };
}

export default Event;
