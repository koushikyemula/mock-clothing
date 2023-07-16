import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCRx60a7MQHayGq_zD85podtwPZ0V1MXKE",
  authDomain: "mock-clothing-db.firebaseapp.com",
  projectId: "mock-clothing-db",
  storageBucket: "mock-clothing-db.appspot.com",
  messagingSenderId: "1097869966941",
  appId: "1:1097869966941:web:86ac39f5daeb4de2c697b4",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
