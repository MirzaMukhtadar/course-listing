// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC6UcodWq5lypIJub814SrSzI2_K8TvBwE",
  authDomain: "course-list-ac065.firebaseapp.com",
  projectId: "course-list-ac065",
  storageBucket: "course-list-ac065.appspot.com",
  messagingSenderId: "554790943299",
  appId: "1:554790943299:web:9c33e8dde87e1b9d2272f6",
  measurementId: "G-K2G7NX1FNT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
