import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCF8cisVX-KMToq0f7FyD-9Lt0C5WEzqZw",
    authDomain: "crwn-clothing-763fe.firebaseapp.com",
    projectId: "crwn-clothing-763fe",
    storageBucket: "crwn-clothing-763fe.appspot.com",
    messagingSenderId: "1019196993492",
    appId: "1:1019196993492:web:948b4ba878ed08f764f041",
    measurementId: "G-DHR1N2TXM9"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;