// Import the functions you need from the SDKs you need
import { firebase } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDxH0GW4aNORcDCuWqeEAtDItOWaV9djqM",
    authDomain: "fireblogsyt-4990b.firebaseapp.com",
    projectId: "fireblogsyt-4990b",
    storageBucket: "fireblogsyt-4990b.appspot.com",
    messagingSenderId: "162035838808",
    appId: "1:162035838808:web:6cb994b883dca5c80a3f2d"
  };

  // Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {timestamp};

export default firebase.firestore();