//firebase config to upload an image when creting a new product

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBsXrnPnaR-tcFhRYgwW-sGELoVOKKmfPg",
  authDomain: "nicoshop-7f8a1.firebaseapp.com",
  projectId: "nicoshop-7f8a1",
  storageBucket: "nicoshop-7f8a1.appspot.com",
  messagingSenderId: "954638438107",
  appId: "1:954638438107:web:444b439fe1f0fd26ed46fe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app 