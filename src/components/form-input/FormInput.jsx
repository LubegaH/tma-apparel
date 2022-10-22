import React from 'react';
import './formInput.styles.scss';

const FormInput = ({ label, ...otherProps }) => {
  return (
    <div className='groupInput'>
      {label && (
        <label
          className={`${
            otherProps.value.length ? 'shrink' : ''
          } form-input-label`}
        >
          {label}
        </label>
      )}
      <input {...otherProps} className='form-input' />
    </div>
  );
};

export default FormInput;
