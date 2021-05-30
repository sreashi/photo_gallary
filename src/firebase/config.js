import  firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyB9IeTr55Z3XsZgamwOYDMLw_vEjZWOfI8",
    authDomain: "photo-gallery-66fe7.firebaseapp.com",
    projectId: "photo-gallery-66fe7",
    storageBucket: "photo-gallery-66fe7.appspot.com",
    messagingSenderId: "568573342278",
    appId: "1:568573342278:web:d3cda0adac955f451dd047"
  };
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export { projectStorage, projectFirestore, timestamp } ;

