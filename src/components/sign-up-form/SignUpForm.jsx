import React, { useState } from 'react';
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';
import Button from '../button/Button';
import FormInput from '../form-input/FormInput';
import './signupForm.scss';

const initialState = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(initialState);
  const { name, email, password, confirmPassword } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const resetFormFields = () => {
    setFormFields(initialState);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword && password.length < 6) {
      console.log('Passwords must match');
      return;
    }
    if (password.length < 6) {
      console.log('Password must be at least 6 characters');
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await createUserDocumentFromAuth(user, { name });
      resetFormFields();
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('Can not create user. Email already in use');
      } else {
        console.log('There was an error creating the user ', error);
      }
    }
  };
  return (
    <div className='signUp-container'>
      <h2>Do not have an account?</h2>
      <span>Sign Up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='Name'
          inputOptions={{
            required: true,
            type: 'text',
            name: 'name',
            value: name,
            onChange: handleChange,
          }}
        />

        <FormInput
          label='Email'
          inputOptions={{
            required: true,
            type: 'email',
            name: 'email',
            value: email,
            onChange: handleChange,
          }}
        />

        <FormInput
          label='Password'
          inputOptions={{
            required: true,
            type: 'password',
            name: 'password',
            value: password,
            onChange: handleChange,
          }}
        />

        <FormInput
          label='Confirm Password'
          inputOptions={{
            required: true,
            type: 'password',
            name: 'confirmPassword',
            value: confirmPassword,
            onChange: handleChange,
          }}
        />

        {/* <button type='submit'>Sign Up</button> */}
        <Button type='submit'>Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
