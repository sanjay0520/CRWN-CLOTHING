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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
