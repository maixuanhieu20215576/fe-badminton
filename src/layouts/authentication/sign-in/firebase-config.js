import { initializeApp } from "firebase/app";
import { getAuth, FacebookAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAWyi61TbrsDn22UTjko141QRU1PZx9nvA",
  authDomain: "be-badminton.firebaseapp.com",
  projectId: "be-badminton",
  storageBucket: "be-badminton.firebasestorage.app",
  messagingSenderId: "510191061240",
  appId: "1:510191061240:web:ea2866f9af5613cacd530d",
  measurementId: "G-MD409YQ00R",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new FacebookAuthProvider();

export { auth, provider };
