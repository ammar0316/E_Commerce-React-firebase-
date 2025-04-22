// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword ,signOut} from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  doc,
  getDoc,
  updateDoc,
  deleteDoc,
} from "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAlz6wC6mJza5EVyX--LrGIWj3infQ6u-4",
  authDomain: "react-project-5970a.firebaseapp.com",
  projectId: "react-project-5970a",
  storageBucket: "react-project-5970a.firebasestorage.app",
  messagingSenderId: "112338580708",
  appId: "1:112338580708:web:e7d7b25aa9683ee96928f1",
  measurementId: "G-GE0110WH8M",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// to firbase authentication
const auth = getAuth(app);
export { db,auth, createUserWithEmailAndPassword, signInWithEmailAndPassword,signOut, collection, addDoc, getDocs, doc, getDoc, updateDoc, deleteDoc };
