import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAUkjE2z_LzcexdSnhDpTWHBk215aRzTVU",
    authDomain: "linkedin-clone-2022.firebaseapp.com",
    projectId: "linkedin-clone-2022",
    storageBucket: "linkedin-clone-2022.appspot.com",
    messagingSenderId: "896033209338",
    appId: "1:896033209338:web:ff80d93b76296f3c9e4243"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  export { auth, provider, storage };
  export default db;