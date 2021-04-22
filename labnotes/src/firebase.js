import firebase from 'firebase/app'
import 'firebase/firestore'

// Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyBZjiu43YWQK4WdJvhLiG4JTPsVAkZP3cU",
    authDomain: "labnotes-75014.firebaseapp.com",
    projectId: "labnotes-75014",
    storageBucket: "labnotes-75014.appspot.com",
    messagingSenderId: "962158621869",
    appId: "1:962158621869:web:85e49e8ae41cab363d8224"
  };
  // Initialize Firebase
 const fb = firebase.initializeApp(firebaseConfig);
export const db = fb.firestore();

