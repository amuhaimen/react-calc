// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmEm5kv9PxoKIkoHMkFarhCBdo_sum07k",
  authDomain: "react-calc-1eed0.firebaseapp.com",
  databaseURL: "https://react-calc-1eed0-default-rtdb.firebaseio.com",
  projectId: "react-calc-1eed0",
  storageBucket: "react-calc-1eed0.appspot.com",
  messagingSenderId: "634405171978",
  appId: "1:634405171978:web:1a6d51b21c15812c63c0f3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default firebaseConfig;
