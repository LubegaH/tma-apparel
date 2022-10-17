import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyD9gfxBQNuNEikV4lTQtsCr5IzLYVrNPjg',
  authDomain: 'tma-aparrel.firebaseapp.com',
  projectId: 'tma-aparrel',
  storageBucket: 'tma-aparrel.appspot.com',
  messagingSenderId: '682711741490',
  appId: '1:682711741490:web:5679c6f8a94be3c142382b',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
