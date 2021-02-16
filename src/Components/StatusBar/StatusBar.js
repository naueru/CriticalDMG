// Core
import React, { Component } from 'react';

// Libraries
import PropTypes from 'prop-types';

// Styles
import styles from './StatusBar.module.css';

class MainMenu extends Component {
  static propTypes = {
    players: PropTypes.number,
    timeSpent: PropTypes.string,
    sessionNumber: PropTypes.number,
    gameName: PropTypes.string
  };

  static defaultProps = {
    players: 0,
    timeSpent: '0:00h',
    sessionNumber: 0,
    gameName: 'Eclipse Phase'
  }

  render = () => {
    const
      props               = this.props || {},
      players             = props.players,
      timeSpent           = props.timeSpent,
      sessionNumber       = props.sessionNumber,
      gameName            = props.gameName,
      translations        = props.translations,
      statusBarLabels     = (translations && translations.statusBar) || {},
      amountPlayersLabel  = `${statusBarLabels.amountPlayers} ${players}`,
      timeSpentLabel      = `${statusBarLabels.timeSpent} ${timeSpent}`,
      sessionNumberLabel  = `${statusBarLabels.sessionNumber} ${sessionNumber}`,
      gameNameLabel       = `${statusBarLabels.gameName} ${gameName}`;
    return (
      <footer>
        <ul className={styles.statusBarList}>
          <li className={styles.statusBarListItem}>{amountPlayersLabel}</li>
          <li className={styles.statusBarListItem}>{timeSpentLabel}</li>
          <li className={styles.statusBarListItem}>{sessionNumberLabel}</li>
          <li className={styles.statusBarListItem}>{gameNameLabel}</li>
        </ul>
      </footer>
    );
  };
}

export default MainMenu;
