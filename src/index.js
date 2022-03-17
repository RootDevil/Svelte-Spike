// import { initializeApp } from "firebase/app";
// import {getAuth, onAuthStateChanged} from "firebase/auth";
import firebase from "firebase/app"
import "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAY7vAHXPL1Sld-UN2tn2vVZyeo8aQeZwA",
  authDomain: "svelte-8b087.firebaseapp.com",
  projectId: "svelte-8b087",
  storageBucket: "svelte-8b087.appspot.com",
  messagingSenderId: "874967777677",
  appId: "1:874967777677:web:1c79281dcb85e8e472bdc4",
  measurementId: "G-8YWRRFJR6Y"
};

// Initialize Firebase

// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);

firebase.initializeApp(firebaseConfig); 


//get firebase auth object

const auth = firebase.auth();


// Detect Auth state

// onAuthStateChanged(auth, user => {
//   if (user != null) {
//     console.log("logged in")
//   } else {
//     console.log("no user")
//   }
// })



