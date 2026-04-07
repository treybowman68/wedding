// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-vKjeax1mwVicB-KohoxiZjBNzPkC47M",
  authDomain: "wedding-rsvp-ff9a9.firebaseapp.com",
  projectId: "wedding-rsvp-ff9a9",
  storageBucket: "wedding-rsvp-ff9a9.firebasestorage.app",
  messagingSenderId: "601935587078",
  appId: "1:601935587078:web:d16985bf02130def7c6087",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);