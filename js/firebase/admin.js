import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "./script"

const auth = getAuth();

const pwdBtn = document.querySelector("#create-user-btn")

pwdBtn.addEventListener("click", () => {
  const email = document.querySelector("#email").value
  const randomPwd = Math.random().toString(36).slice(-10)

  createUserWithEmailAndPassword(auth, email, randomPwd)
    .then((userCredential) => {
      console.log(userCredential.user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode)
      console.log(errorMessage)
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
