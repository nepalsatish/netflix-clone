import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
//import { seedDatabase } from "../seed";

//we need to seed the database

// config here
const firebaseConfig = {
  apiKey: "AIzaSyCU85eIsxGKdtMBvGZJCNLNyXqGvEiGqvQ",
  authDomain: "netflix-clone-8b095.firebaseapp.com",
  databaseURL: "https://netflix-clone-8b095.firebaseio.com",
  projectId: "netflix-clone-8b095",
  storageBucket: "netflix-clone-8b095.appspot.com",
  messagingSenderId: "888135584694",
  appId: "1:888135584694:web:698b23d48c994fa558cf17",
};

const firebase = Firebase.initializeApp(firebaseConfig);

//seedDatabase(firebase);

export { firebase };
