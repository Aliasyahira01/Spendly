
// AsyncStorage : like localStorage in web browsers , it saves data permanently on the phone even when the app is closed

import AsyncStorage from "@react-native-async-storage/async-storage";
import { initializeApp } from "firebase/app";
import { getReactNativePersistence, initializeAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // ← handles database

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLK8HHAMyNXsHn0qhMSvy72u2ggomaweA",
  authDomain: "spendly-17d1e.firebaseapp.com",
  projectId: "spendly-17d1e",
  storageBucket: "spendly-17d1e.firebasestorage.app",
  messagingSenderId: "432810044610",
  appId: "1:432810044610:web:261ae96e7bb98bb9c19f5b"
};

const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});

export const db = getFirestore(app);