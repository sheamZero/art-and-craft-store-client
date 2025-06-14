// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCH3LMHqXns6mZnA08whdpAn051F_5-5Sc",
  authDomain: "art-and-craft-store-clie-35a87.firebaseapp.com",
  projectId: "art-and-craft-store-clie-35a87",
  storageBucket: "art-and-craft-store-clie-35a87.firebasestorage.app",
  messagingSenderId: "322016542408",
  appId: "1:322016542408:web:5b159b310ad492961f2ffd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;