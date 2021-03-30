import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCa49h6banXPon_IMSgTkD5w4zLmDFvAYI",
  authDomain: "challenge-9e937.firebaseapp.com",
  projectId: "challenge-9e937",
  storageBucket: "challenge-9e937.appspot.com",
  messagingSenderId: "136645952418",
  appId: "1:136645952418:web:219bb84f421b504bc7a8fb",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
