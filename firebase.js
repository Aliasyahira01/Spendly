// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // ← handles login/register
import { getFirestore } from "firebase/firestore"; // ← handles database
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLK8HHAMyNXsHn0qhMSvy72u2ggomaweA",
  authDomain: "spendly-17d1e.firebaseapp.com",
  projectId: "spendly-17d1e",
  storageBucket: "spendly-17d1e.firebasestorage.app",
  messagingSenderId: "432810044610",
  appId: "1:432810044610:web:261ae96e7bb98bb9c19f5b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);   // ← makes auth usable in any screen
export const db = getFirestore(app); // ← makes database usable in any screen