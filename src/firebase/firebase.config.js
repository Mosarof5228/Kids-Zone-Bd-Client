// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCNkE4ZF3thz6n1yKTmMFipw3xJKyA0adQ",
    authDomain: "kids-zone-bd.firebaseapp.com",
    projectId: "kids-zone-bd",
    storageBucket: "kids-zone-bd.appspot.com",
    messagingSenderId: "347249434599",
    appId: "1:347249434599:web:589122e7e76619948da742"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;