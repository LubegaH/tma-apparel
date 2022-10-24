import React from 'react';

import './auth.scss';

import SignUpForm from '../../components/sign-up-form/SignUpForm';
import SignInForm from '../../components/signIn-form/SignIn';

const Authentication = () => {
  return (
    <div className='auth-container'>
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
