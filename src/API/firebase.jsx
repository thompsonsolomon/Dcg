import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyDQ0-ISvuw-HyxRZSDCtjWlolG4SgCe5qk",
  authDomain: "dcgupdated.firebaseapp.com",
  projectId: "dcgupdated",
  storageBucket: "dcgupdated.appspot.com",
  messagingSenderId: "794961574533",
  appId: "1:794961574533:web:1fbb08f5726568dfb887ec",
  measurementId: "G-KY7WCJ5ZBV"
};
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app)
export const storage = getStorage(app);
export const auth =  getAuth(app);
