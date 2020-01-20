// Core
import React, { Component } from 'react';

// Libraries
import PropTypes from 'prop-types';

// Styles
import styles from './SubMenu.module.css';

class SubMenu extends Component {
  static propTypes = {
    items: PropTypes.array,
    onClick: PropTypes.func
  };

  static defaultProps = {
    items: [],
    onClick: () => {}
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

  handleClick = () => {
    const { onClick, closeMenu } = this.props;
    closeMenu();
    onClick();
  };

  render = () => {
    const { items } = this.props;

    return (
      <div className={styles.subMenuWrapper} onClick={this.handleClick}>
        <ul className={styles.subMenuList}>
          {this.renderList(items)}
        </ul>
      </div>
    );
  };
}

export default SubMenu;
