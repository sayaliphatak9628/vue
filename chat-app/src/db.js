import firebase from 'firebase/app';
import 'firebase/database';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// eslint-disable-next-line no-unused-vars
const firebaseConfig = {
    apiKey: 'AIzaSyC9z3VBzly2S6hUp4-XNlS41gXauKPPwtE',
    authDomain: 'chat-app-2a7b8.firebaseapp.com',
    projectId: 'chat-app-2a7b8',
    storageBucket: 'chat-app-2a7b8.appspot.com',
    messagingSenderId: '561172847855',
    appId: '1:561172847855:web:993666c0d5982e11a04f1a',
    measurementId: 'G-WL3H8Y9MJ7',
};

const db = firebase.initializeApp(firebaseConfig);
export default db;
