import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyC0gArgmng6puJKOtKP2XXj7BjOA6wrluE",
  authDomain: "doerslist-doit.firebaseapp.com",
  projectId: "doerslist-doit",
  storageBucket: "doerslist-doit.appspot.com",
  messagingSenderId: "54137389546",
  appId: "1:54137389546:web:f2e95868bd0673cd283293",
  measurementId: "G-LZ32VGYMJM"
});

const db = firebaseApp.firestore();
// const auth = firebase.auth();
// const storage = firebase.storage();

// export {db, auth, storage};
export { db };
