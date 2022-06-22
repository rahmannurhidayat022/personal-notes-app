import React from 'react';
import styles from './Button.module.css';
import PropTypes from 'prop-types';

function Button({ variant, children, onClick, type }) {
  let color = variant === "primary" ? styles.primary : 
    (variant === "secondary" ? styles.secondary : 
    (variant === "danger" && styles.danger));

  return (
    <button onClick={onClick} type={type} className={[styles.btn, color].join(' ')}>{children}</button>
  )
}

Button.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary', 'danger']).isRequired,
  type: PropTypes.oneOf(['button', 'submit', 'reset']).isRequired,
  onClick: PropTypes.func,
};

export default  Button;
