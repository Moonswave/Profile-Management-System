// src/firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAGg60IFjYdnHwfJYkNZRyQvwoeyN3CN5o",
  authDomain: "login-data-557d4.firebaseapp.com",
  projectId: "login-data-557d4",
  storageBucket: "login-data-557d4.appspot.com",
  messagingSenderId: "888839398224",
  appId: "1:888839398224:web:08a4f3d2a00be7e3008255",
  measurementId: "G-QEG1N1Q3J1"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, googleProvider, db };
