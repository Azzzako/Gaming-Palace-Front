// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2e47zfskzx6fyZS-IpO0VTDNI4n2-ujQ",
  authDomain: "myproyectpf-test1.firebaseapp.com",
  projectId: "myproyectpf-test1",
  storageBucket: "myproyectpf-test1.appspot.com",
  messagingSenderId: "724628269545",
  appId: "1:724628269545:web:db4e2a6e5addc037a60378",
  measurementId: "G-ST9Y66DGM7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
const analytics = getAnalytics(app);