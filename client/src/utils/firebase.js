

import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"


const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_APIKEY ,
  authDomain: "interviewiq-a8174.firebaseapp.com",
  projectId: "interviewiq-a8174",
  storageBucket: "interviewiq-a8174.firebasestorage.app",
  messagingSenderId: "88307785750",
  appId: "1:88307785750:web:8278fc2f97e2b8f2305537"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth,provider}