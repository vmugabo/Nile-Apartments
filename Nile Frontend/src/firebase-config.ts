// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyATqutFwfC4ZbVMiRVjByru3F_oyzIiynY",
  authDomain: "nile-apartments-55305.firebaseapp.com",
  projectId: "nile-apartments-55305",
  storageBucket: "nile-apartments-55305.firebasestorage.app",
  messagingSenderId: "215263035007",
  appId: "1:215263035007:web:ea39e672489f2002d1c94a",
  measurementId: "G-8TQNMXTBGB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db };