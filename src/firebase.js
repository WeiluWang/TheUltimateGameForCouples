// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5ttq3nU0U07deM9xs-EggT-zf5lkv4rs",
  authDomain: "test-1180b.firebaseapp.com",
  projectId: "test-1180b",
  storageBucket: "test-1180b.appspot.com",
  messagingSenderId: "1048998916610",
  appId: "1:1048998916610:web:34a03e302cdbcba896ed1b",
  measurementId: "G-PLM5TL1FVP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export {db};