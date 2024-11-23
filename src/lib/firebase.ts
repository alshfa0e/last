import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyClSfhUgX2MfL4wd4x0aCT7G3tAyuzJlcQ",
  authDomain: "fa-ain-chatbot.firebaseapp.com",
  projectId: "fa-ain-chatbot",
  storageBucket: "fa-ain-chatbot.firebasestorage.app",
  messagingSenderId: "97241230590",
  appId: "1:97241230590:web:82df89b16d0248cfcd89af",
  measurementId: "G-ZJM5P3CYY1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const analytics = getAnalytics(app);