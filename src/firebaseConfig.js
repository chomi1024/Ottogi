// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQ9viMBWKyoD3W9RF1unS3Pqd9sK_0RmI",
  authDomain: "project-90a5b.firebaseapp.com",
  projectId: "project-90a5b",
  storageBucket: "project-90a5b.appspot.com",
  messagingSenderId: "1009566279348",
  appId: "1:1009566279348:web:b1246c6aa0ab8439fd19e1",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

export { db };
