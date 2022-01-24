// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = initializeApp({
  apiKey: "AIzaSyBJw5hbABg-KAiOSCgRaXxBtWRd05k52jc",
  authDomain: "myclinic-4c12e.firebaseapp.com",
  databaseURL: "https://myclinic-4c12e-default-rtdb.firebaseio.com",
  projectId: "myclinic-4c12e",
  storageBucket: "myclinic-4c12e.appspot.com",
  messagingSenderId: "328346753706",
  appId: "1:328346753706:web:90e37d4be1b90351a64ed3",
  measurementId: "G-J7JFKQJK2S"
});

// Initialize Firebase
export const db = getFirestore();