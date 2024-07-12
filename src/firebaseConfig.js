// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8pqlWUndJ6R6OoYXrHuJyJoy-u7mwL2U",
  authDomain: "orebi-project.firebaseapp.com",
  projectId: "orebi-project",
  storageBucket: "orebi-project.appspot.com",
  messagingSenderId: "22862996004",
  appId: "1:22862996004:web:c7004c5491a7d818d8eeb1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default firebaseConfig