// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQst3irBooLzuMO7B3ykVbI0Zd_976nU8",
  authDomain: "azami-4dc3c.firebaseapp.com",
  projectId: "azami-4dc3c",
  storageBucket: "azami-4dc3c.appspot.com",
  messagingSenderId: "462047811441",
  appId: "1:462047811441:web:965edb049393f701d288d0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)