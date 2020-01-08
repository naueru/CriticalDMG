// Core
import React, { Component } from 'react';

// Parser
import parseMenues from './MenuParser';

// Conponents
import SubMenu from './SubMenu';

// Styles
import styles from './MainMenu.module.css';

class MainMenu extends Component {
  renderMenuItems = (list) => {
    return list.map((item, index) => {
      const label = item.label;
      return (
        <li className={styles.mainListItem} key={`${label}_${index}`}>
            {label}
            <SubMenu items={item.subMenues} />
          </li>
      )
    })
  }

  render = () => {
    const menues = parseMenues('es'); // ToDo: Define a way to set the language
    return (
      <nav>
        <ul className={styles.mainList}>
          {this.renderMenuItems(menues)}
        </ul>
      </nav>
    );
  };
}

export default MainMenu;
