// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAs8CZkkuzIRHO4SQbqqNTUtqCkSQ3-Ac4",
  authDomain: "deepak-chaudhari-portfolio.firebaseapp.com",
  projectId: "deepak-chaudhari-portfolio",
  storageBucket: "deepak-chaudhari-portfolio.firebasestorage.app",
  messagingSenderId: "761437933684",
  appId: "1:761437933684:web:001650373b7d8e88b90121",
  measurementId: "G-9EYE122G6Y"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const analytics = isSupported().then(yes => yes ? getAnalytics(app) : null);

export { app, analytics };
