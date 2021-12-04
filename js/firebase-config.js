// import functions from SDKs that we need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAxeZlaswV1d8mk5YC7oPKcKROiF7bQ4kk",
  authDomain: "rmit-fintech-club-web.firebaseapp.com",
  projectId: "rmit-fintech-club-web",
  storageBucket: "rmit-fintech-club-web.appspot.com",
  messagingSenderId: "143874417921",
  appId: "1:143874417921:web:7df4f4d3d9944a7d24a700",
  measurementId: "G-4E3JCYWVYW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
