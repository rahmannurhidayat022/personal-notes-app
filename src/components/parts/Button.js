import React from 'react';
import styles from './Button.module.css';
import PropTypes from 'prop-types';

function Button({ variant, children, onClick }) {
  let color = variant === "primary" ? styles.primary : 
    (variant === "secondary" ? styles.secondary : 
    (variant === "danger" && styles.danger));

  return (
    <button className={[styles.btn, color].join(' ')}>{children}</button>
  )
}

Button.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary', 'danger']).isRequired,
  onClick: PropTypes.func,
};

export default  Button;
