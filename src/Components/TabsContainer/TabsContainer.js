// Core
import React, { Component, Fragment } from 'react';

// Libraries
import PropTypes from 'prop-types';

// Styles
import styles from './TabsContainer.module.css';

class TabsContainer extends Component {
  static propTypes = {
    tabs: PropTypes.array
  };

  static defaultProps = {
    tabs: []
  };

  constructor(props) {
    super(props);
    this.state = {
      currentTab: 0
    };
  }

  setCurrentTab = (index) => this.setState({ currentTab: index });

  renderTabs = (tabs) => {
    const { currentTab } = this.state,
      { width, height } = this.props,
      tabList = tabs.map((tab, index) => {
        const { label } = tab,
          style = currentTab === index ? styles.tabSelected : styles.tab;
        // ToDo: Determine how to handle when amount of tabs exeds content width
        return (
          <li key={`Tab_${index}`}>
            <button
              className={style}
              onClick={(e) => {
                e.stopPropagation();
                return this.setCurrentTab(index)
              }}
            >
              {label}
            </button>
          </li>
        );
      }),
      contentList = tabs.map((tab, index) => {
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

  render = () => {
    const { tabs } = this.props;
    return (
      <div
        className={styles.tabsContainer}
      >
        {this.renderTabs(tabs)}
      </div>
    );
  };
};

export default TabsContainer;
