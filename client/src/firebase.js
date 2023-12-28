// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "prosper-sauthapp.firebaseapp.com",
  projectId: "prosper-sauthapp",
  storageBucket: "prosper-sauthapp.appspot.com",
  messagingSenderId: "8838680358",
  appId: "1:8838680358:web:2e5d4672b663cbce7d3be7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);