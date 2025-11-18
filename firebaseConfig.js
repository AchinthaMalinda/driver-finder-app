// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAyYucj-v1e_qT8m4LH7JyjZKWXy9Ce3QY",
  authDomain: "driverfinderapp-1e844.firebaseapp.com",
  projectId: "driverfinderapp-1e844",
  storageBucket: "driverfinderapp-1e844.firebasestorage.app",
  messagingSenderId: "1007849562216",
  appId: "1:1007849562216:web:391b549a5e2fcb10cfdbdd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;