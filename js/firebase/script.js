// import functions from SDKs that we need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

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
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();


// track user's authentication state
onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log(user.email);
  } else {
    // redirect to login when not signed in
    console.log("User is no longer signed in")
    // window.location.href = "../../test/login.html"
  }
});


// Login
const loginForm = document.querySelector("#login-form")
if (loginForm) {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault()
    const email = document.querySelector("#email").value
    const pwd = document.querySelector("#pwd").value

    signInWithEmailAndPassword(auth, email, pwd)
      // redirect to next page if successful
      .then((cred) => {
        console.log(cred.user.email + " signed in")
        // window.location.href = "../../test/admin.html"
      })
      .catch((error) => {
        // see error
        console.log(error.code);
        console.log(error.message);
      });
  })
}


// Sign out
const signOutBtn = document.querySelector("#signout")
if (signOutBtn) {
  signOutBtn.addEventListener("click", () => {
    signOut(auth).then(() => {
      console.log("user signed out")
    }).catch((error) => {
      console.log(error.code)
      console.log(error.message)
    });
  })
}


// Create new user
const createUserBtn = document.querySelector("#create-user-btn")
if (createUserBtn) {
  createUserBtn.addEventListener("click", () => {
    const email = document.querySelector("#email").value
    // create 10-character random password
    const randomPwd = Math.random().toString(36).slice(-10)

    createUserWithEmailAndPassword(auth, email, randomPwd)
      .then((cred) => {
        console.log("successful sign up " + cred.user.email);
      })
      .catch((error) => {
        console.log(error.code)
        console.log(error.message)
      });
  })
}

