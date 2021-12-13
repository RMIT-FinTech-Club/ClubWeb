// import functions from SDKs that we need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";

const config = {
  // apiKey: process.env.API_KEY,
  // authDomain: process.env.AUTH_DOMAIN,
  // projectId: process.env.PROJECT_ID,
  // storageBucket: process.env.STORAGE_BUCKET,
  // messagingSenderId: process.env.MESSAGING_SENDER_ID,
  // appId: process.env.APP_ID,
  // measurementId: process.env.MEASUREMENT_ID

  apiKey: "AIzaSyAxeZlaswV1d8mk5YC7oPKcKROiF7bQ4kk",
  authDomain: "rmit-fintech-club-web.firebaseapp.com",
  projectId: "rmit-fintech-club-web",
  storageBucket: "rmit-fintech-club-web.appspot.com",
  messagingSenderId: "143874417921",
  appId: "1:143874417921:web:7df4f4d3d9944a7d24a700",
  measurementId: "G-4E3JCYWVYW"
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
      window.location.href = "../../test/admin.html"
      const user = credential.user;    // get info about user
      console.log(user)
    })
    .catch((error) => {
      // see error
      console.log(error.code)
      console.log(error.message)
    });
})

const userSignOut = () => {
  signOut(auth).then(() => {
    console.log("user signed out")
  }).catch((error) => {
    console.log(error.code)
    console.log(error.message)
  });
}



