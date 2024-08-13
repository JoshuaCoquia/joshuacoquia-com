// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBOMaVVH4M1wgfC8UdRcJmIzWzP3YlnBkU",
  authDomain: "joshuacoquiaspace.firebaseapp.com",
  projectId: "joshuacoquiaspace",
  storageBucket: "joshuacoquiaspace.appspot.com",
  messagingSenderId: "168778961012",
  appId: "1:168778961012:web:cf0b1ba26bab71e0d44121",
  measurementId: "G-BMHMWZEVPJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);
console.log("Firebase initialized!");