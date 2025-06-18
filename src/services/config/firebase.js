import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyA0DNp_Xop8GUAW_q4Vj4TrKtrBJcPcmiY',
  authDomain: 'react-coder-house-64498.firebaseapp.com',
  projectId: 'react-coder-house-64498',
  storageBucket: 'react-coder-house-64498.firebasestorage.app',
  messagingSenderId: '296336168673',
  appId: '1:296336168673:web:0d5eb9b4825a4284bf89a0',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
