import firebase from "firebase";

// const firebaseApp = firebase.initializeApp({
//  apiKey: "AIzaSyBucH7Kzm8Ds5CbuUs8uQJlzTPh3eZcTzA",
//  authDomain: "instagram-clone-23884.firebaseapp.com",
//  databaseURL: "https://instagram-clone-23884.firebaseio.com",
//  projectId: "instagram-clone-23884",
//  storageBucket: "instagram-clone-23884.appspot.com",
//  messagingSenderId: "671034896143",
//  appId: "1:671034896143:web:3aceafdf2319c9f1fc587a",
// });

const firebaseApp = firebase.initializeApp({
 apiKey: "AIzaSyCHz3XOuiNsGZBxfC5jrxd8RK9QRZslsIo",
   authDomain: "instagram-clone-33.firebaseapp.com",
   databaseURL: "https://instagram-clone-33.firebaseio.com",
   projectId: "instagram-clone-33",
   storageBucket: "instagram-clone-33.appspot.com",
   messagingSenderId: "487808646549",
   appId: "1:487808646549:web:a8a55443b7c3df65b50a9c",
 });

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
