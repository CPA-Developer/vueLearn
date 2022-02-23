// Import the functions you need from the SDKs you need
import { firebase } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDiaHx06Zwmq1YY4wOnH3AdMjUjN7dUU6Y",
  authDomain: "fireblogsyt-338b4.firebaseapp.com",
  projectId: "fireblogsyt-338b4",
  storageBucket: "fireblogsyt-338b4.appspot.com",
  messagingSenderId: "791658471977",
  appId: "1:791658471977:web:a34e499bc13b6e55c03238"
};


  // Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {timestamp};

export default firebase.firestore();