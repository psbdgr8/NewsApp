// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAuOfvKpr4uOUHP2FvEe1PY4prOcK-LmxM",

  authDomain: "newsapp-54ea2.firebaseapp.com",

  projectId: "newsapp-54ea2",

  storageBucket: "newsapp-54ea2.appspot.com",

  messagingSenderId: "191832881223",

  appId: "1:191832881223:web:573b93fe611c5ffe255962",

  measurementId: "G-S8SE2R99JZ",
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
  
}

const auth = firebase.auth();

export { auth };
