import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCtCY4OvVSopqfxfyYhTF4eDCKj_gMOZaI",
  authDomain: "fooder-e54d0.firebaseapp.com",
  databaseURL: "https://fooder-e54d0.firebaseio.com",
  projectId: "fooder-e54d0",
  storageBucket: "fooder-e54d0.appspot.com",
  messagingSenderId: "1089304973746",
  appId: "1:1089304973746:web:624c0c7912685fea1294ab",
  measurementId: "G-FG4681C499",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
