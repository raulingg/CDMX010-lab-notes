import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCg5--3bn-BSQUCHIyxg-syXwOWUhEeNcw",
  authDomain: "recordadora-1b389.firebaseapp.com",
  projectId: "recordadora-1b389",
  storageBucket: "recordadora-1b389.appspot.com",
  messagingSenderId: "310137859602",
  appId: "1:310137859602:web:5db02df24edc591a65f2cb",
  measurementId: "G-C1X5HW65Y2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  const fireStore = firebase.firestore();

  export {fireStore}