// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAgHrKZHb0KsF91vBtJEHlR2Y02TYbOMI",
  authDomain: "comp1800-project-e59b6.firebaseapp.com",
  projectId: "comp1800-project-e59b6",
  storageBucket: "comp1800-project-e59b6.appspot.com",
  messagingSenderId: "457912185661",
  appId: "1:457912185661:web:f0efd2063e398c01f34b54"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const storage = firebase.storage();