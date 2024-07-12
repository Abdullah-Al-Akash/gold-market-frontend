// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAR_eEujUAkIHeSRddviPLsskc-Wms0CcY",
  authDomain: "gold-markett.firebaseapp.com",
  projectId: "gold-markett",
  storageBucket: "gold-markett.appspot.com",
  messagingSenderId: "81159036921",
  appId: "1:81159036921:web:1f46b8cc61b2ac2fc7a728"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;