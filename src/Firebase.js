// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBuPza52crtDUjm1-kqyxdm6I-gfqTiTKk",
  authDomain: "my-blog-e47bf.firebaseapp.com",
  projectId: "my-blog-e47bf",
  storageBucket: "my-blog-e47bf.firebasestorage.app",
  messagingSenderId: "91015086402",
  appId: "1:91015086402:web:6fa9fd4bed273bf29188db",
  measurementId: "G-XN7W1613D9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
