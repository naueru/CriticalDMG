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
    this.state = {
      activeMenu: false
    };
  }

  renderMenuItems = (list) => {
    const { activeMenu } = this.state;
    return list.map((item, index) => {
      const label     = item.label,
        renderSubmenu = activeMenu === index,
        setActiveMenu = renderSubmenu ? -1 : index;
      return (
        <li className={styles.mainListItem} key={`${label}_${index}`}>
          <button
            className={styles.mainMenuButton}
            onClick={() => this.setState({ activeMenu: setActiveMenu })}
          >
            {label}
          </button>
          {renderSubmenu && <SubMenu items={item.subMenues} onClick={() => this.setState({ activeMenu: -1 })} />}
        </li>
      )
    })
  }

  render = () => {
    const { handleState } = this.props,
      menues = parseMenues('es', handleState); // ToDo: Define a way to set the language
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
