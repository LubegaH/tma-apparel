import React from 'react';
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';

const Signin = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    createUserDocumentFromAuth(user);
  };
  return (
    <div>
      <h2>Sign in page</h2>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
    </div>
  );
};

export default Signin;
