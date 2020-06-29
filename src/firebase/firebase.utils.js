import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBevWf_d3UCtJtgwbSxM7SlgbwqiHrOATc",
  authDomain: "crwn-db-4cdc7.firebaseapp.com",
  databaseURL: "https://crwn-db-4cdc7.firebaseio.com",
  projectId: "crwn-db-4cdc7",
  storageBucket: "crwn-db-4cdc7.appspot.com",
  messagingSenderId: "610665740172",
  appId: "1:610665740172:web:6b4bf604381373291408a9",
  measurementId: "G-J0T3DJM73G",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
