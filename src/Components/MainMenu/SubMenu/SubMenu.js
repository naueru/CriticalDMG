// Core
import React, { Component } from 'react';

// Libraries
import PropTypes from 'prop-types';

// Styles
import styles from './SubMenu.module.css';

class SubMenu extends Component {
  static propTypes = {
    items: PropTypes.array
  };

  static defaultProps = {
    items: []
  };

  renderList = (list) => {
    return list.map((item, index) => {
      const label = item && item.label,
        onClick   = item && item.onClick;
      return (
        <li className={styles.subMenuListItem}>
          <button
            className={styles.subMenuButton}
            onClick={onClick}
          >
            {label}
          </button>
        </li>
      );
    });
  };

  render = () => {
    return (
      <div className={styles.subMenuWrapper}>
        <ul className={styles.subMenuList}>
          {this.renderList([
            {label: 'Item 1', onClick: () => alert('Clicked on 1')},
            {label: 'Item 2', onClick: () => alert('Clicked on 2')},
            {label: 'Item 3', onClick: () => alert('Clicked on 3')}
          ])}
        </ul>
      </div>
    );
  };
}

export default SubMenu;
