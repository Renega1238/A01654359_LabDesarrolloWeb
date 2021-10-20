import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCe83_7-DkwINIa4vEugz4CaKXXJdKw_tc",
  authDomain: "servicio-14be9.firebaseapp.com",
  databaseURL: "https://servicio-14be9.firebaseio.com",
  projectId: "servicio-14be9",
  storageBucket: "servicio-14be9.appspot.com",
  messagingSenderId: "306324073818",
  appId: "1:306324073818:web:d71ccacf689ed569"
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
