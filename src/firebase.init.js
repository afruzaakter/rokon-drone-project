// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVEODCtTseu13NQRgV35cLQUc5Uxi41rI",
  authDomain: "assignment-9-7ea71.firebaseapp.com",
  projectId: "assignment-9-7ea71",
  storageBucket: "assignment-9-7ea71.appspot.com",
  messagingSenderId: "396048754824",
  appId: "1:396048754824:web:5b419ac17c27126107173d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;