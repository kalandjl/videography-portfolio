// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDmf0ydS3QSxvVdr6GKv-lW1tLJKyrcmzc",
  authDomain: "videography-portfolio-2b971.firebaseapp.com",
  projectId: "videography-portfolio-2b971",
  storageBucket: "videography-portfolio-2b971.firebasestorage.app",
  messagingSenderId: "740282593752",
  appId: "1:740282593752:web:d88d806622ddd4bc9dc2ad",
  measurementId: "G-WWXTQ7L2X9"

};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Auth, firestore, and popup sign in initialization
export const firestore = getFirestore(app);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider();
