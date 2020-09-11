import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyABrK3bG0ulEz-iSNlSk0v2-iLnSh8OlUs",
  authDomain: "clone-eb991.firebaseapp.com",
  databaseURL: "https://clone-eb991.firebaseio.com",
  projectId: "clone-eb991",
  storageBucket: "clone-eb991.appspot.com",
  messagingSenderId: "957745265522",
  appId: "1:957745265522:web:3f9bc4e9009d5fe26d3beb",
  measurementId: "G-K6P0HTLGGZ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };