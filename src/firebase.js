import firebase from 'firebase/app'
import 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDj-wTNVrsxkFda6IGff2m2kXGsrh_JObo",
  authDomain: "notes-crud-react.firebaseapp.com",
  projectId: "notes-crud-react",
  storageBucket: "notes-crud-react.appspot.com",
  messagingSenderId: "335088290482",
  appId: "1:335088290482:web:2c5d40a3218b1bd0af17ab"
};
// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig)

export const db = fb.firestore();



