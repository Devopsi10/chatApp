// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDL4xiJWYSorGryv7TQwMOgAH8R_LOVC3E",
  authDomain: "chatapp-91a2a.firebaseapp.com",
  projectId: "chatapp-91a2a",
  storageBucket: "chatapp-91a2a.appspot.com",
  messagingSenderId: "747347447120",
  appId: "1:747347447120:web:4d79aad52a3b70684ef055"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)


export default app