import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqCem4QS3f4dpTQS8CuuT2bCZSRe-r_TU",
  authDomain: "fir-p2-68901.firebaseapp.com",
  projectId: "fir-p2-68901",
  storageBucket: "fir-p2-68901.appspot.com",
  messagingSenderId: "698992737851",
  appId: "1:698992737851:web:51217c12d7d435b8b5e61e"
};

let instance;

export default function getFirebase() {
  if (typeof window !== "undefined") {
    if (instance) return instance;
    instance = firebase.initializeApp(firebaseConfig);
    return instance;
  }
  return null;
}
