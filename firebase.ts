// Import the functions you need from the SDKs you need
import { FirebaseApp, getApp, getApps, initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDd1H3QIjBIP33sWTON0C4ghrOXRXXGOws",
  authDomain: "chatgpt-firebase.firebaseapp.com",
  projectId: "chatgpt-firebase",
  storageBucket: "chatgpt-firebase.appspot.com",
  messagingSenderId: "354369146734",
  appId: "1:354369146734:web:be4493a2f7baf26681bb7f"
};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
const app = getApps().length ? getApp():initializeApp(firebaseConfig);
const db = getFirestore(app);
export {db};




