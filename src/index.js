import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD909mg8J3pqzGInpXqCADt2z8XcaHgWaE",
  authDomain: "stream-it-movies.firebaseapp.com",
  databaseURL:
    "https://stream-it-movies-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "stream-it-movies",
  storageBucket: "stream-it-movies.appspot.com",
  messagingSenderId: "314273712317",
  appId: "1:314273712317:web:5d2b862d812d2daaae4fd4",
};

// Initialize Firebase
const firebaeApp = initializeApp(firebaseConfig);

// useContext or Redux to manage the state
// OnWork!...

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
