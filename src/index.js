import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "./styles/styles.css";


// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyBhYmCOxw_n3NtO2B0qO7JWokWBg6AHh4M",

  authDomain: "supesu-b3032.firebaseapp.com",

  projectId: "supesu-b3032",

  storageBucket: "supesu-b3032.appspot.com",

  messagingSenderId: "648180196060",

  appId: "1:648180196060:web:d91a09b88e86d0a10cca19"

};


// Initialize Firebase

initializeApp(firebaseConfig);




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
