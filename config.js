import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyBIXhKETv3Eo8nIZ2ZpLgQk0Cr00RrrMm4",
  authDomain: "booksanta-372f1.firebaseapp.com",
  projectId: "booksanta-372f1",
  storageBucket: "booksanta-372f1.appspot.com",
  messagingSenderId: "904755432961",
  appId: "1:904755432961:web:d7355999478339934a3a00"
  };


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
