import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA6cb1jiK_Jwz2t5lMrbfV72yV-n7OawFc",
  authDomain: "yiros-meals.firebaseapp.com",
  projectId: "yiros-meals",
  storageBucket: "yiros-meals.appspot.com",
  messagingSenderId: "563474260522",
  appId: "1:563474260522:web:64fc4957be0109ac369953",
};

initializeApp(firebaseConfig);

const auth = getAuth();

export const loginRequest = (email, password) =>
  signInWithEmailAndPassword(auth, email, password);
