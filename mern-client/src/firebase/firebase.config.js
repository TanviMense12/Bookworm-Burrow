// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_2CdX8n2kXFzX8UxrJmFV5vunpJxh8jk",
  authDomain: "mern-book-inventory-9fd34.firebaseapp.com",
  projectId: "mern-book-inventory-9fd34",
  storageBucket: "mern-book-inventory-9fd34.appspot.com",
  messagingSenderId: "620032831955",
  appId: "1:620032831955:web:f824f627785022b10f3f26"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;