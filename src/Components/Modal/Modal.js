// Core
import React from 'react';

// Libraries
import PropTypes from 'prop-types';

// Styles
import styles from './Modal.module.css';

const Modal = ({child, onClose, children}) => {
  return (
    <div
      className={styles.modalContainer}
      onClick={onClose}
    >
      {child}
      {children}
    </div>
  );
};

// ToDo: Define by props if uses close button, wrapper and type of transition
Modal.propTypes = {
  child: PropTypes.string,
  onClose: PropTypes.func,
};

Modal.defaultProps = {
  onClose: () => {},
}

export default Modal;
