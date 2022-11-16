import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore'



const firebaseConfig = {
    apiKey: "AIzaSyAt3Y83-1X4_4dk0NavlArs7tYIEF9odic",
    authDomain: "curd-function.firebaseapp.com",
    projectId: "curd-function",
    storageBucket: "curd-function.appspot.com",
    messagingSenderId: "154326557382",
    appId: "1:154326557382:web:d15a7f90574b2c5460edc7",
    measurementId: "G-ZF7811KXPX"
  };


  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app)