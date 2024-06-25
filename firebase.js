 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 const firebaseConfig = {
   apiKey: "AIzaSyDKJv4e64LlOg6xeLbLox40Qe6ExT6g8Y0",
   authDomain: "myblog-9a33a.firebaseapp.com",
   projectId: "myblog-9a33a",
   storageBucket: "myblog-9a33a.appspot.com",
   messagingSenderId: "96395343280",
   appId: "1:96395343280:web:5f44ea2ee48446b3e2d275"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 
 let db = firebase.firestore();