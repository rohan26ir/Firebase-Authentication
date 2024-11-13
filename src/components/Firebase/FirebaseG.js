// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFCmS0WAzp9xTXpOx2ozz6vE0kL00zbY0",
  authDomain: "fibaauth-01.firebaseapp.com",
  projectId: "fibaauth-01",
  storageBucket: "fibaauth-01.firebasestorage.app",
  messagingSenderId: "628151122624",
  appId: "1:628151122624:web:093a46e5616a28d7c68b25"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;