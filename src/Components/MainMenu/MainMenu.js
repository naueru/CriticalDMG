// Core
import React, { Component } from 'react';

// Libraries
import PropTypes from 'prop-types';

// Config
import config from '../../CritCore/Config/config';

// Parser
import parseMenues from './MenuParser';

// Conponents
import SubMenu from './SubMenu';

// Styles
import styles from './MainMenu.module.css';

class MainMenu extends Component {
  static propTypes = {
    handleState: PropTypes.func,
    account: PropTypes.string
  };

  static defaultProps = {
    handleState: () => {},
    account: ''
  };

  constructor(props) {
    super(props);
    this.state = {
      activeMenu: false,
      showHideMenu: false
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
          {renderSubmenu && <SubMenu items={item.subMenues}
            onClick={() => this.setState({ activeMenu: -1 })}
            closeMenu={() => this.hideMenu()}
          />}
        </li>
      )
    })
  }

  hideMenu = () => {
    return this.setState({showHideMenu: false})
  }

  toggleMenu = () => {
    const { showHideMenu } = this.state;
    return this.setState({showHideMenu: !showHideMenu})
  }

  render = () => {
    const { handleState, account, isDevelop, developerMode, updateDeveloperModeSetting } = this.props,
      { showHideMenu } = this.state,
      { language } = config,
      menues = parseMenues(language, handleState, account, isDevelop, developerMode, updateDeveloperModeSetting);
    return (
      <nav>
        <button onClick={this.toggleMenu} className={`${styles.hamburgerBtn} ${showHideMenu && styles.open}`}>
          <span className={styles.hamburgerIngredient} />
          <span className={styles.hamburgerIngredient} />
          <span className={styles.hamburgerIngredient} />
        </button>
        <ul className={`${styles.mainList} ${!showHideMenu && styles.hiddenMenu}`}>
          {this.renderMenuItems(menues)}
        </ul>
      </nav>
    );
  };
}

export default MainMenu;
