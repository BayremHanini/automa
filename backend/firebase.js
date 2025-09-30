import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-analytics.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { getAuth, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";


const firebaseConfig = {
  apiKey: "AIzaSyDRWVCZvvhwWQ6-GFIg2itOU2ZxrEEm1Bc",
  authDomain: "automa-e7a55.firebaseapp.com",
  projectId: "automa-e7a55",
  storageBucket: "automa-e7a55.appspot.com",
  messagingSenderId: "881549519390",
  appId: "1:881549519390:web:1c6ffa6a98c2c80bef5c0f",
  measurementId: "G-Z0F304T0RS"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider(); 