import React, { useState } from 'react';
import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  signInAuthWithEmailAndPassword,
} from '../../utils/firebase/firebase.utils';

import Button, { BUTTON_TYPE_CLASSES } from '../button/Button';
import FormInput from '../form-input/FormInput';
import './signin.scss';

const initialState = {
  email: '',
  password: '',
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(initialState);
  const { email, password } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const resetFormFields = () => {
    setFormFields(initialState);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await signInAuthWithEmailAndPassword(email, password);
      // reset form fields
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case 'auth/wrong-password':
          alert('Wrong password, please try again');
          break;

        case 'auth/user-not-found':
          alert("There's no account associate with this email");
          break;

        default:
          console.log(error);
      }
    }
  };

  // handle signing in with Google
  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  return (
    <div className='signUp-container'>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
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
        <div className='auth-buttons'>
          <Button type='submit'>Sign In</Button>
          <Button
            type='button'
            buttonType={BUTTON_TYPE_CLASSES.google}
            onClick={signInWithGoogle}
          >
            Google Signin
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
