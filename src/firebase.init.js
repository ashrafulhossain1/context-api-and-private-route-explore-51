// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB54WHTyVbKf9A8-roIM-X3FdcUvPqsoNo",
    authDomain: "th-moha-milon.firebaseapp.com",
    projectId: "th-moha-milon",
    storageBucket: "th-moha-milon.firebasestorage.app",
    messagingSenderId: "478926627271",
    appId: "1:478926627271:web:474381e656e4160eba79e2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);