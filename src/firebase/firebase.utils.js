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

  const myCollectionRef = firestore.collection("/users");
  console.log("collectionReference", myCollectionRef);

  const snapShot = await userRef.get();
  const myCollectionSnapshot = await myCollectionRef.get();

  console.log("collection1", {
    collection: myCollectionSnapshot.docs.map((doc) => doc.data()),
  });

  console.log(
    "collection2",
    myCollectionSnapshot.docs.map((doc) => doc.data())
  );

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

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map((doc) => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });

  const transformedCollection1 = transformedCollection.reduce((a, i) => {
    //console.log(i.title.toLowerCase());
    a[i.title.toLowerCase()] = i;
    return a;
  }, {});

  return transformedCollection1;
};

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);
  const myBatch = firestore.batch();

  objectsToAdd.sort().forEach((o) => {
    const documentReference = collectionRef.doc();
    myBatch.set(documentReference, o);
  });

  return await myBatch.commit();
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
