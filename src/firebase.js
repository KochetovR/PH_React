import firebase from "firebase/compat/app";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBnSTfeD5gs0CFNa8lrec57sPE0t96QkmY",
  authDomain: "mtt-poker-helper.firebaseapp.com",
  projectId: "mtt-poker-helper",
  storageBucket: "mtt-poker-helper.appspot.com",
  messagingSenderId: "946641977949",
  appId: "1:946641977949:web:5db0c7af509ca0185703b4",
  measurementId: "G-HNSHTT61RJ"
};


firebase.initializeApp(firebaseConfig)

export default firebase
