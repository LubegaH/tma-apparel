import React from 'react';
import './button.scss';

const BUTTON_TYPE_CLASSES = {
  google: 'google-signIn',
  inverted: 'inverted',
};

const Button = ({ children, buttonType, ...buttonOptions }) => {
  return (
    <button
      className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
      {...buttonOptions}
    >
      {children}
    </button>
  );
};

export default Button;
