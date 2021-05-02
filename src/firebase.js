import firebase from "firebase";

const config = JSON.parse(process.env.REACT_APP_FIRESTORE_CONFIG);

  firebase.initializeApp(config);

  export default firebase;