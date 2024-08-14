import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyC9Cpp0LE3hO4uTMs9kiS6sCGXx_7xvHbQ",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "e-commerce-project-ede50",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "1017332866374",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
