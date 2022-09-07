import { initializeApp } from "firebase/app";
import {getFirestore, collection, getDocs} from "firebase/firestore/lite"
const firebaseConfig = {
  apiKey: "AIzaSyDcrmqs80aZdMohsYo8y7l71VhGXhFZ-nw",
  authDomain: "drag-the-box.firebaseapp.com",
  projectId: "drag-the-box",
  storageBucket: "drag-the-box.appspot.com",
  messagingSenderId: "164311247125",
  appId: "1:164311247125:web:544d7a46ebd59cb93fe11c"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

