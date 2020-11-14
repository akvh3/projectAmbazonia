import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyAcE32rMf31LBuJtyPHKMweLNvFBCUyGas",
    authDomain: "orphan-connect.firebaseapp.com",
    databaseURL: "https://orphan-connect.firebaseio.com",
    projectId: "orphan-connect",
    storageBucket: "orphan-connect.appspot.com",
    messagingSenderId: "153737478985",
    appId: "1:153737478985:web:cc65e0da83cd91d8e59098"
};
// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
const storage = firebase.storage()
const firestore = firebase.firestore()
const auth = firebase.auth()

export {storage, firestore, auth}