import firebase from 'firebase';
const firebaseApp=firebase.initializeApp({
   
        apiKey: "AIzaSyAloAo_DO35EnlpwtZpaz-19K0DhJKvmdE",
        authDomain: "amzon-32699.firebaseapp.com",
        databaseURL: "https://amzon-32699.firebaseio.com",
        projectId: "amzon-32699",
        storageBucket: "amzon-32699.appspot.com",
        messagingSenderId: "587178530761",
        appId: "1:587178530761:web:5fe021d984ed2a71f7ba18",
        measurementId: "G-C6FRLSSNX8"
});

const db=firebaseApp.firestore();
const auth=firebase.auth();

export {db,auth};