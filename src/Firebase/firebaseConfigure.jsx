// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMMzFuLu2i--3oCEVcglD3mDhF62hskyk",

  // Uso variable de entorno para que la db no quede visible. Debo incluir ienv en .gitignore para que no se suba al repo. Aqui la dejo para la correcta evaluacion del proyecto
  //apiKey: import.meta.env.vit.VITE_API_KEY,
  authDomain: "proyectoecommerce-365a1.firebaseapp.com",
  projectId: "proyectoecommerce-365a1",
  storageBucket: "proyectoecommerce-365a1.firebasestorage.app",
  messagingSenderId: "256893492005",
  appId: "1:256893492005:web:b4fecdbb0b5547c05dd8cc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

