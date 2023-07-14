// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJAPIXaYsoybJJdWrNor2aDya1O6f6NkY",
  authDomain: "modify-text.firebaseapp.com",
  projectId: "modify-text",
  storageBucket: "modify-text.appspot.com",
  messagingSenderId: "742240823089",
  appId: "1:742240823089:web:e2aa3be5cf0129e9d47210",
  measurementId: "G-0F8GJ0ZC3P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app)
export const storage = getStorage(app)