import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Pomodoro's Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyDZmvqrwsaaZqkcdklokP8heGfclxgZhe0",
  authDomain: "pomodoro-timer-32163.firebaseapp.com",
  projectId: "pomodoro-timer-32163",
  storageBucket: "pomodoro-timer-32163.appspot.com",
  messagingSenderId: "897321083406",
  appId: "1:897321083406:web:fcc5dc4a7451647801125f"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);


export{ app, auth, db };