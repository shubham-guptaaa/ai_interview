// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase-admin/auth";

import { getFirestore } from "firebase-admin/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCmfR2qYkPDFxKS39hx_Xwx8FXyQ8V8P_0",
  authDomain: "placementai-84b6a.firebaseapp.com",
  projectId: "placementai-84b6a",
  storageBucket: "placementai-84b6a.firebasestorage.app",
  messagingSenderId: "378994365853",
  appId: "1:378994365853:web:5f28ce4132a434c7ec0b74",
  measurementId: "G-DCRDGN4505"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);