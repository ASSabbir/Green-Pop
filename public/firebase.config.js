// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcGag20Y60bvdY1mTVi4qAWCFHoNLEmzg",
  authDomain: "green-pop.firebaseapp.com",
  projectId: "green-pop",
  storageBucket: "green-pop.appspot.com",
  messagingSenderId: "931927256536",
  appId: "1:931927256536:web:89cf0b76c986e8dc21d6ad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);