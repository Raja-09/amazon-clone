import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const fireBaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBacOBRIAmIUvRqJdHBS4plgAUOPsQZ4aQ",
    authDomain: "fir-87e6f.firebaseapp.com",
    projectId: "fir-87e6f",
    storageBucket: "fir-87e6f.appspot.com",
    messagingSenderId: "1083532771073",
    appId: "1:1083532771073:web:04daf8085ac927fdaae500",
    measurementId: "G-165FP7JKQ8"
});

const db = fireBaseApp.firestore();

const auth = firebase.auth();

export { db, auth }