// Core
import React, { Fragment, useState } from 'react';

// Libraries
import PropTypes from 'prop-types';

// Styles
import styles from './TabsContainer.module.css';

const TabsContainer = ({
  height,
  tabs,
  width,
}) => {

  const [currentTab, setStateCurrentTab] = useState(0);

  const setCurrentTab = (index, event) => {
    event.stopPropagation();
    return setStateCurrentTab(index);
  };

  const renderTabs = (tabs) => {
    const tabList = tabs.map((tab, index) => {
      const { label } = tab,
        style = currentTab === index ? styles.tabSelected : styles.tab;
      // ToDo: Determine how to handle when amount of tabs exeds content width
      return (
        <li key={`Tab_${index}`}>
          <button
            className={style}
            onClick={(e) => {setCurrentTab(index, e)}}
          >
            {label}
          </button>
        </li>
      );
    });
    const contentList = tabs.map((tab, index) => {
      const { content } = tab;
      return (
        <Fragment key={`Tab_content_${index}`}>
          {(currentTab === index) && content}
        </Fragment>
      );
    });
    return (
      <Fragment>
        <ul className={styles.tabs}>
          {tabList}
        </ul>
        <div
          className={styles.content}
          style={{
              width: `${width}`,
              height: `${height}`
          }}
        >
          {contentList}
        </div>
      </Fragment>
    );
  };

  return (
    <div
      className={styles.tabsContainer}
    >
      {renderTabs(tabs)}
    </div>
  );
};

TabsContainer.propTypes = {
  tabs: PropTypes.array,
};

TabsContainer.defaultProps = {
  tabs: [],
};

export default TabsContainer;
