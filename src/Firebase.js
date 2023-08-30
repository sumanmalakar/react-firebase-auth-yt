
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'



const firebaseConfig = {
  apiKey: "AIzaSyAHQ9BygNZnHow7b0uk5jCjGRTsVFQiZnQ",
  authDomain: "fir-auth-yt-5eaa5.firebaseapp.com",
  projectId: "fir-auth-yt-5eaa5",
  storageBucket: "fir-auth-yt-5eaa5.appspot.com",
  messagingSenderId: "617373827366",
  appId: "1:617373827366:web:714a00dec07f6a656e41e7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)