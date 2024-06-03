// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANnFZRjfctB3ikn2PDb0i1PAVpoWG0pUM",
  authDomain: "lubricentro-zotta.firebaseapp.com",
  projectId: "lubricentro-zotta",
  storageBucket: "lubricentro-zotta.appspot.com",
  messagingSenderId: "931503067996",
  appId: "1:931503067996:web:72c1dbe38d95c659a2a799"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore();

export default db

