import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFbv2SqHCR92dgTRveKEoFv0hUkBfvESE",
  authDomain: "cabbooking-75cf4.firebaseapp.com",
  projectId: "cabbooking-75cf4",
  storageBucket: "cabbooking-75cf4.appspot.com",
  messagingSenderId: "1020940441621",
  appId: "1:1020940441621:web:ce255ae83fa335af09d61c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { firestore };