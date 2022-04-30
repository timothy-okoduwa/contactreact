// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
import firebase from "firebase";
import "firebase/firestore";
import "firebase/storage";
import "firebase/auth";
export const app = firebase.initializeApp({
  apiKey: "AIzaSyDzB-aBAMKL-I6LPGZ-DOL68MAQ1uAMtQQ",
  authDomain: "all-contacts-saver.firebaseapp.com",
  projectId: "all-contacts-saver",
  storageBucket: "all-contacts-saver.appspot.com",
  messagingSenderId: "692935078863",
  appId: "1:692935078863:web:bcfc79ed6e9db20cdad8ba",
});

export default app;
