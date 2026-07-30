import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "YOUR_ACTUAL_API_KEY",
  authDomain: "darknesschat-9ef50.firebaseapp.com",
  projectId: "darknesschat-9ef50",
  storageBucket: "darknesschat-9ef50.firebasestorage.app",
  messagingSenderId: "731739451193",
  appId: "1:731739451193:web:a3c293018348126411c2e8",
  measurementId: "G-FBRWEQTN7C"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
