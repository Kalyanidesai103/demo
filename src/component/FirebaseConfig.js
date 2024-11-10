// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from './firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/database'
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9El5-_qXn9b8vp4_mBQHMRCA2wbzazSs",
  authDomain: "fir-auth-908f5.firebaseapp.com",
  projectId: "fir-auth-908f5",
  storageBucket: "fir-auth-908f5.appspot.com",
  messagingSenderId: "856739808286",
  appId: "1:856739808286:web:9cafe4bcc74c68c9bf5a0f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default firebaseConfig;