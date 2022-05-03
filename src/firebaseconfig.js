// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyC8MujNFWoLSVUTVyzn6LDWIGMkA_ZKGkE",
  authDomain: "first-app-6b43d.firebaseapp.com",
  projectId: "first-app-6b43d",
  storageBucket: "first-app-6b43d.appspot.com",
  messagingSenderId: "152506046269",
  appId: "1:152506046269:web:bba89e32d5b29913131754",
  measurementId: "G-44X3D9GCST"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db};