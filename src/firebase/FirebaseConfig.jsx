// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4FJBj0SGtz-8hfLi-qsIGjlBVabOt9BI",
  authDomain: "shubham-b224c.firebaseapp.com",
  projectId: "shubham-b224c",
  storageBucket: "shubham-b224c.appspot.com",
  messagingSenderId: "348328913219",
  appId: "1:348328913219:web:0bc585985150314ff427f6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const analytics = getAnalytics(app);
const auth = getAuth(app);
export {auth,fireDB}