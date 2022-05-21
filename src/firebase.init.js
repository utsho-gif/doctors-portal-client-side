import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";



// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_APP_ID,
// };


// const app = initializeApp(firebaseConfig);

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlkry3KEoKRuU1_K4IXsvdESE2uYncozU",
  authDomain: "doctors-portal-18e36.firebaseapp.com",
  projectId: "doctors-portal-18e36",
  storageBucket: "doctors-portal-18e36.appspot.com",
  messagingSenderId: "119464024840",
  appId: "1:119464024840:web:c952eeb5db1c21cde32abd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;