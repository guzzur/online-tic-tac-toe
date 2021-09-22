// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAV-B0uToO3gVBzAhO4tYwfObQWjJcASEU",
  authDomain: "online-tic-tac-michael.firebaseapp.com",
  projectId: "online-tic-tac-michael",
  storageBucket: "online-tic-tac-michael.appspot.com",
  messagingSenderId: "618700839746",
  appId: "1:618700839746:web:f85a2c70e8f79fd19ec6db",
  measurementId: "G-604933PQXQ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);