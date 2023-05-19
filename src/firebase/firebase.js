// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDSqTOg4e0zG8mMkla4c8WH96V2kQyYXa8",
  authDomain: "office-hours-5c71d.firebaseapp.com",
  projectId: "office-hours-5c71d",
  storageBucket: "office-hours-5c71d.appspot.com",
  messagingSenderId: "1029016064418",
  appId: "1:1029016064418:web:5551f4129f25a4c00ee2fb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
