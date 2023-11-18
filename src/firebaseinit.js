// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBZd1XVUlraK44cqwGPMbQ5fXkZ2q2ulaY',
  authDomain: 'blogging-app-4dcd9.firebaseapp.com',
  projectId: 'blogging-app-4dcd9',
  storageBucket: 'blogging-app-4dcd9.appspot.com',
  messagingSenderId: '1078878865022',
  appId: '1:1078878865022:web:4aca1e02b286da33533a2f',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);