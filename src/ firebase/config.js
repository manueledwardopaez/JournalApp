// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBykN_7SlSrb9l3QV2ZqGiflxDWgffOJAQ",
  authDomain: "react-curso-cfa2e.firebaseapp.com",
  projectId: "react-curso-cfa2e",
  storageBucket: "react-curso-cfa2e.appspot.com",
  messagingSenderId: "540384624486",
  appId: "1:540384624486:web:1a2c8aa3bb2397909bd2a7",
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth(FirebaseApp);

export const FirebaseDB = getFirestore(FirebaseApp);
