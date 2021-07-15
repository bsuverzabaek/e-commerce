import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAZPUlgrK1Tz_kndFDDyN2HVY-7pLfV1Sc",
  authDomain: "e-commerce-3e5cf.firebaseapp.com",
  projectId: "e-commerce-3e5cf",
  storageBucket: "e-commerce-3e5cf.appspot.com",
  messagingSenderId: "692572359234",
  appId: "1:692572359234:web:8249265d31edf8c257fbdb"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

export { auth };