// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from "firebase/storage";



const firebaseConfig = {
  apiKey: "AIzaSyAnQznJ0_NYNRLsMe4PnOxRbxvIg8WNwGc",
  authDomain: "healthconnect-304b4.firebaseapp.com",
  projectId: "healthconnect-304b4",
  storageBucket: "healthconnect-304b4.appspot.com",
  messagingSenderId: "269769587537",
  appId: "1:269769587537:web:c9c0a0bfa648e1d1fe7170",
  measurementId: "G-93L8D55HWH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const googleprovider=new GoogleAuthProvider();
export const db=getFirestore(app);
export const storage=getStorage(app);