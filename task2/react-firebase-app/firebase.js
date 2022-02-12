import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAX6Nql7jMr7kw22BDyEaUXd5vha2aTG4w",
  authDomain: "react-firebase-app-task2.firebaseapp.com",
  projectId: "react-firebase-app-task2",
  storageBucket: "react-firebase-app-task2.appspot.com",
  messagingSenderId: "597218350239",
  appId: "1:597218350239:web:6fa42e4589d01fa6a57eaa"
};

let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app();
}

const auth = firebase.auth();

const firebase_codes = {
  'auth/email-already-in-use': {'type': 'error', 'text': 'Email already in use'},
  'auth/weak-password': {'type': 'error', 'text': 'Weak password'},
  'auth/invalid-email': {'type': 'error', 'text': 'Invalid Email'},
  'auth/user-disabled': {'type': 'error', 'text': 'User is disabled'},
  'auth/user-not-found': {'type': 'error', 'text': 'User not found'},
  'auth/wrong-password': {'type': 'error', 'text': 'Wrong Password'},

  'auth/internal-error': {'type': 'info', 'text': 'Internal error'},
  'auth/network-request-failed': {'type': 'info', 'text': 'Network error'},
  'auth/too-many-requests': {'type': 'info', 'text': 'Too many request. Try again after some time'}
}

export { auth, firebase_codes };

