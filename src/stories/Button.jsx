import React from 'react';
import './Button.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Button(props) {
  const { variant = 'primary', children, href, ...rest } = props;

  const renderIcon = () => {
    if (variant === 'search' || variant === 'searchIcon') {
      return <i className="fas fa-search" title={variant === 'searchIcon' ? 'Search' : ''}></i>;
    }
    return null;
  };

  const buttonContent = (
    <>
      {renderIcon()}
      {children}
    </>
  );

  return href ? (
    <a href={href} className={`button ${variant}`} {...rest}>
      {buttonContent}
    </a>
  ) : (
    <button className={`button ${variant}`} {...rest}>
      {buttonContent}
    </button>
  );
}

export default Button;
