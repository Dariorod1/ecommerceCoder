import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { initializeApp } from "firebase/app";
import './index.css';


const firebaseConfig = {
  apiKey: "AIzaSyB5prBg1jpF3L_UNWS10OnGxL9Ke5OCVDM",
  authDomain: "coderhouse-ecommerce-ab469.firebaseapp.com",
  projectId: "coderhouse-ecommerce-ab469",
  storageBucket: "coderhouse-ecommerce-ab469.appspot.com",
  messagingSenderId: "1067627900537",
  appId: "1:1067627900537:web:1538d472ead133b8e56ea8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
