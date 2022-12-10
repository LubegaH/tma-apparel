import React from 'react';

import { FormInputLabel, Input, GroupInput } from './FormInput.styles';

const FormInput = ({ label, inputOptions }) => {
  return (
    <GroupInput>
      <Input {...inputOptions} />
      {label && (
        <FormInputLabel shrink={inputOptions.value.length}>
          {label}
        </FormInputLabel>
      )}
    </GroupInput>
  );
};

export default FormInput;
