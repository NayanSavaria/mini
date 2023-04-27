import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDEptP7Q9x-euttRGMOSvuMrg0_5n6TvO4",
  authDomain: "mini1-b3892.firebaseapp.com",
  projectId: "mini1-b3892",
  storageBucket: "mini1-b3892.appspot.com",
  messagingSenderId: "355857215689",
  appId: "1:355857215689:web:001532de79b59e7c419d18",
  measurementId: "G-XHCYEDWS4D"
};




// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()

