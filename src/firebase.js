import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAR3mulAFH53C4XWDuNBAjxPK0jVkVXizk",
  authDomain: "b2beurope-80cfa.firebaseapp.com",
  databaseURL: "https://b2beurope-80cfa.firebaseio.com",
  projectId: "b2beurope-80cfa",
  storageBucket: "b2beurope-80cfa.appspot.com",
  messagingSenderId: "288246404331",
  appId: "1:288246404331:web:27cccaa1a59fd9a07fdaae",
  measurementId: "G-609VCCNS4Q" 
});
;
const db = firebaseApp.firestore()
const auth = firebase.auth();

export {db,auth};