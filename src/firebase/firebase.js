// Import the functions you need from the SDKs you need

import firebase from "firebase";
require("dotenv").config();
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDzCSoGGjY2b92wXOH0IzZx4ylTCs4aJbc",
  authDomain: "oops-d07bb.firebaseapp.com",
  databaseURL:
    "https://oops-d07bb-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "oops-d07bb",
  storageBucket: "oops-d07bb.appspot.com",
  messagingSenderId: "211587737253",
  appId: "1:211587737253:web:a7d08b130f52ebe1aa8f4c",
  measurementId: "G-83RW73RZGF",
};
// const firebaseConfig = {
//   apiKey: process.env.APIKEY,
//   authDomain: process.env.AUTHDOMAIN,
//   databaseURL: process.env.DATABASEURL,
//   projectId: process.env.PROJECTID,
//   storageBucket: process.env.STORAGEBUCKET,
//   messagingSenderId: process.env.MESSAGINGSENDERID,
//   appId: process.env.APPID,
//   measurementId: process.env.MEASUREMENTID,
// };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var auth = firebase.auth();
var provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider };
