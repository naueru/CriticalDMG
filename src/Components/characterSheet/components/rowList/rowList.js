// React
import React from 'react';

// Libraries
import PropTypes from 'prop-types';

// Styles
import styles from './rowList.module.css';

const renderList = (list) => {
  return list.map((item, index) => {
    return (
      <li key={`RowList_item_${index}`}  className={styles.row}>{item}</li>
    );
  });
};

const RowList = ({ label, list }) => {
  return (
    <section className={styles.container}>
      <label className={styles.label}>{label}: </label>
      <ul className={styles.list}>
        {renderList(list)}
      </ul>
    </section>
  );
};

RowList.propTypes = {
  label: PropTypes.string,
  list: PropTypes.array
};

RowList.defaultProps = {
  label: '',
  list: []
};

export default RowList;
