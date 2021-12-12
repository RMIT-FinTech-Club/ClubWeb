import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "./config";

const auth = getAuth()

const loginForm = document.querySelector("#login-form")

loginForm.addEventListener("submit", (e) => {
  e.preventDefault()
  const email = document.querySelector("#email").value
  const pwd = document.querySelector("#pwd").value

  signInWithEmailAndPassword(auth, email, pwd)
    .then((credential) => {
      // get info about user
      const user = credential.user;
      console.log(user)   // test to see if sign in works
    })
    .catch((error) => {
      // see error
      console.log(error.code)
      console.log(error.message)
    });
})


//
// const userSignOut = () => {
//   signOut(auth).then(() => {
//     console.log("user signed out")
//   }).catch((error) => {
//     console.log(error.code)
//     console.log(error.message)
//   });
// }
//
// const sendResetPwdEmail = (email) => {
//   sendPasswordResetEmail(auth, email)
//     .then(() => {
//       console.log("email sent successfully!")
//     })
//     .catch((error) => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       console.log(errorCode)
//       console.log(errorMessage)
//     });
// }
