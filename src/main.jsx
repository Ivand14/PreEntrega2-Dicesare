import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrggO4-OA82x5WOmNtyrkQuCgDAm01VDw",
  authDomain: "roxyam-64fc9.firebaseapp.com",
  projectId: "roxyam-64fc9",
  storageBucket: "roxyam-64fc9.appspot.com",
  messagingSenderId: "1047071920429",
  appId: "1:1047071920429:web:7158a9b89620155ef603a4"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
