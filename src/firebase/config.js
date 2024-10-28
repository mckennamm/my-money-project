import firebase from 'firebase/app' // If using Firebase database   
import 'firebase/firestore' // If using Firebase database   
import 'firebase/auth' // If using Firebase authentication

const firebaseConfig = {
    apiKey: "AIzaSyCae2mXA4nkCFQKX0toxviF0d6_CEWennE",
    authDomain: "mymoney-9204b.firebaseapp.com",
    projectId: "mymoney-9204b",
    storageBucket: "mymoney-9204b.appspot.com",
    messagingSenderId: "26335158180",
    appId: "1:26335158180:web:e024a357f4aa09f50e2b31"
  }

  //initialize firebase
firebase.initializeApp(firebaseConfig)

//initialize service
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

export { projectFirestore, projectAuth } 