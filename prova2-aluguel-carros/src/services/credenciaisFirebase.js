import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDCOycaeSyMddqjFR1GDzRcC_1jbo8jt5I",
  authDomain: "prova2-aluguel-carros.firebaseapp.com",
  projectId: "prova2-aluguel-carros",
  storageBucket: "prova2-aluguel-carros.firebasestorage.app",
  messagingSenderId: "196765373459",
  appId: "1:196765373459:web:b13923822d7f4ff7d39be6"
};

const appFirebase = initializeApp(firebaseConfig);

export const db = getFirestore(appFirebase);

export default appFirebase;