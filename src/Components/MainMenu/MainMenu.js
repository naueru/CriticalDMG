// Core
import React, { Component } from 'react';

// Parser
import parseMenues from './MenuParser';

// Conponents
import SubMenu from './SubMenu';

// Styles
import styles from './MainMenu.module.css';

class MainMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderMenuItems = (list) => {
    const { state } = this;
    return list.map((item, index) => {
      const label     = item.label,
        stateKey      = `show${label}subMenu`,
        renderSubmenu = state[stateKey];
      return (
        <li className={styles.mainListItem} key={`${label}_${index}`}>
          <button
            className={styles.mainMenuButton}
            onClick={() => {
              let newState = state;
                newState[stateKey] = !newState[stateKey];
              this.setState({ newState }); // ToDo: Adjust this logic, maybe check for active menu to render
            }
          }>
            {label}
          </button>
          {renderSubmenu && <SubMenu items={item.subMenues} />}
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
