// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCfO-sqjld-FD0blAcBPGzedU4Qb_zUYEk",
  authDomain: "yapyokewebsite.firebaseapp.com",
  projectId: "yapyokewebsite",
  storageBucket: "yapyokewebsite.appspot.com",
  messagingSenderId: "546369574752",
  appId: "1:546369574752:web:4a0f677becd57fafd37005",
  measurementId: "G-1XLZ0WP4HJ"
};

// Initialize Firebase

const firebaseApp = initializeApp(firebaseConfig);
//const analytics = getAnalytics(firebaseApp);
export default firebaseApp
