// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIkwmMN3ZLByZx8eahNFN22majG2I0H18",
  authDomain: "instagram-f8e87.firebaseapp.com",
  projectId: "instagram-f8e87",
  storageBucket: "instagram-f8e87.appspot.com",
  messagingSenderId: "990478162476",
  appId: "1:990478162476:web:84ebbc024fc73211f28f89",
  measurementId: "G-S6RHC3QWTC"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };