import React from 'react';
import './formInput.styles.scss';

const FormInput = ({ label, inputOptions }) => {
  return (
    <div className='groupInput'>
      <input {...inputOptions} className='form-input' />
      {label && (
        <label
          className={`${
            inputOptions.value.length ? 'shrink' : ''
          } form-input-label`}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;
