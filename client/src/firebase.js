// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "estate-53d0d.firebaseapp.com",
  projectId: "estate-53d0d",
  storageBucket: "estate-53d0d.appspot.com",
  messagingSenderId: "301539714186",
  appId: "1:301539714186:web:9e4813c431509cbdd77973"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);