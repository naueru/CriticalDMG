// Core
import React from 'react';

// Libraries
import PropTypes from 'prop-types';

// Styles
import styles from './StatusBar.module.css';

const StatusBar = (props) => {

  const properties     = props || {},
    players            = properties.players,
    timeSpent          = properties.timeSpent,
    sessionNumber      = properties.sessionNumber,
    gameName           = properties.gameName,
    translations       = properties.translations,
    statusBarLabels    = (translations && translations.statusBar) || {},
    amountPlayersLabel = `${statusBarLabels.amountPlayers} ${players}`,
    timeSpentLabel     = `${statusBarLabels.timeSpent} ${timeSpent}`,
    sessionNumberLabel = `${statusBarLabels.sessionNumber} ${sessionNumber}`,
    gameNameLabel      = `${statusBarLabels.gameName} ${gameName}`;

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

StatusBar.propTypes = {
  players: PropTypes.number,
  timeSpent: PropTypes.string,
  sessionNumber: PropTypes.number,
  gameName: PropTypes.string,
};

StatusBar.defaultProps = {
  players: 0,
  timeSpent: '0:00h',
  sessionNumber: 0,
  gameName: 'Eclipse Phase',
};

export default StatusBar;
