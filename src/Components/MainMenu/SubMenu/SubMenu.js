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
        <li className={styles.subMenuListItem} key={`${label}_${index}`}>
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
    const { props } = this,
      { items } = props;

    return (
      <div className={styles.subMenuWrapper}>
        <ul className={styles.subMenuList}>
          {this.renderList(items)}
        </ul>
      </div>
    );
  };
}

export default SubMenu;
