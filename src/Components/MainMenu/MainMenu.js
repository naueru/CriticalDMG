// Core
import React, { useState } from 'react';

// Libraries
import PropTypes from 'prop-types';

// Parser
import parseMenues from './MenuParser';

// Conponents
import SubMenu from './SubMenu';

// Styles
import styles from './MainMenu.module.css';

const MainMenu = ({
  account,
  developerMode,
  handleState,
  isDevelop,
  translations,
  updateDeveloperModeSetting,
}) => {

  const [activeMenu, setStateActiveMenu]     = useState(false);
  const [showHideMenu, setStateShowHideMenu] = useState(false);

  const renderMenuItems = (list) => {
    return list.map((item, index) => {
      const label     = item.label,
        renderSubmenu = activeMenu === index,
        setActiveMenu = renderSubmenu ? -1 : index;
      return (
        <li className={styles.mainListItem} key={`${label}_${index}`}>
          <button
            className={styles.mainMenuButton}
            onClick={() => setStateActiveMenu(setActiveMenu)}
          >
            {label}
          </button>
          {renderSubmenu && <SubMenu items={item.subMenues}
            onClick={() => setStateActiveMenu(-1)}
            closeMenu={() => hideMenu()}
          />}
        </li>
      );
    });
  };

  const hideMenu = () => {
    return setStateShowHideMenu(false);
  };

  const toggleMenu = () => {
    return setStateShowHideMenu(!showHideMenu);
  };

  const menues = parseMenues({
    account,
    developerMode,
    handleState,
    isDevelop,
    translations,
    updateDeveloperModeSetting,
  });

  return (
    <nav>
      <button onClick={toggleMenu} className={`${styles.hamburgerBtn} ${showHideMenu && styles.open}`}>
        <span className={styles.hamburgerIngredient} />
        <span className={styles.hamburgerIngredient} />
        <span className={styles.hamburgerIngredient} />
      </button>
      <ul className={`${styles.mainList} ${!showHideMenu && styles.hiddenMenu}`}>
        {renderMenuItems(menues)}
      </ul>
    </nav>
  );
};

MainMenu.propTypes = {
  handleState: PropTypes.func,
  account: PropTypes.string,
};

MainMenu.defaultProps = {
  handleState: () => {},
  account: '',
};

export default MainMenu;
