// import functions from SDKs that we need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";

const config = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID
};


// Initialize Firebase
const app = initializeApp(config);
const analytics = getAnalytics(app);
const auth = getAuth()

// login
const loginForm = document.querySelector("#login-form")
loginForm.addEventListener("submit", (e) => {
  e.preventDefault()
  const email = document.querySelector("#email").value
  const pwd = document.querySelector("#pwd").value

  signInWithEmailAndPassword(auth, email, pwd)
    .then((credential) => {
      const user = credential.user;    // get info about user
      console.log(user)
    })
    .catch((error) => {
      // see error
      console.log(error.code)
      console.log(error.message)
    });
})





