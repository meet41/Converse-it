import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyBcDa99xANi_11SXvNIsK-np4HtZvx-mss",
  authDomain: "converseit-7c085.firebaseapp.com",
  databaseURL: "https://converseit-7c085-default-rtdb.firebaseio.com", // Ensure this URL is correct
  projectId: "converseit-7c085",
  storageBucket: "converseit-7c085.appspot.com",
  messagingSenderId: "421382909166",
  appId: "1:421382909166:web:9764fbd2d2420bc0f397ff"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);

export { database, ref, set };


// Deploy id : AKfycbxnp1hkIAbQFjsIVlFowdbL0tHbskQEueVrTKq4rdBkForeUVVAq-_mw5DdmMZlo8jSUQ
// Web app : https://script.google.com/a/macros/scet.ac.in/s/AKfycbxnp1hkIAbQFjsIVlFowdbL0tHbskQEueVrTKq4rdBkForeUVVAq-_mw5DdmMZlo8jSUQ/exec