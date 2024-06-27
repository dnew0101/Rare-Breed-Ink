import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ 
    title,
    onClick, 
    type = 'button', 
    disabled = false, 
    className = '',
    style = {},
    loading = false,
    children,
    ariaLabel,
}) => {
  return (
    <button 
    type={type} 
    onClick={onClick} 
    disabled={disabled || loading}
    className={className}
    style={style}
    aria-label={ariaLabel || title}
    >
      {loading ? 'Loading...' : children || title}
    </button>
  );
};

Button.propTypes = {
    title: PropTypes.string,
    onClick: PropTypes.func,
    type: PropTypes.oneOf(['button', 'submit', 'reset']),
    disabled: PropTypes.bool,
    className: PropTypes.string,
    style: PropTypes.object,
    loading: PropTypes.bool,
    children: PropTypes.node,
    ariaLabel: PropTypes.string,
  };

export default Button;