// Core
import React from 'react';

// Libraries
import PropTypes from 'prop-types';

// Styles
import styles from './SubMenu.module.css';

const SubMenu = ({
  items,
  closeMenu,
  onClick,
}) => {


  const renderList = (list) => {
    return list.map((item, index) => {
      const label = item && item.label,
        onClick   = item && item.onClick,
        visible   = item && item.visible;
      return visible ? (
        <li className={styles.subMenuListItem} key={`${label}_${index}`}>
          <button
            className={styles.subMenuButton}
            onClick={onClick}
          >
            {label}
          </button>
        </li>
      ) : null;
    });
  };

  const handleClick = () => {
    closeMenu();
    onClick();
  };

  return (
    <div className={styles.subMenuWrapper} onClick={handleClick}>
      <ul className={styles.subMenuList}>
        {renderList(items)}
      </ul>
    </div>
  );
};

SubMenu.propTypes = {
  items: PropTypes.array,
  onClick: PropTypes.func,
};

SubMenu.defaultProps = {
  items: [],
  onClick: () => {},
};

export default SubMenu;
