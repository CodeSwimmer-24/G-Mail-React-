import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyALs3Iq4_vDJ2lZwgP6uDuPbNMnq58BPOc",
  authDomain: "g-mail-clone-c2a35.firebaseapp.com",
  projectId: "g-mail-clone-c2a35",
  storageBucket: "g-mail-clone-c2a35.appspot.com",
  messagingSenderId: "794594580977",
  appId: "1:794594580977:web:9b545a6b175ce4ceeb4c50",
  measurementId: "G-JSKH5ZE2EP",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { db, auth, provider };
