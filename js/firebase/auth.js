import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";

const auth = getAuth();
const signIn = (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user)   // test to see if sign in works
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // test if sign in works and see error
      console.log(errorCode)
      console.log(errorMessage)
    });
}

const userSignOut = () => {
  signOut(auth).then(() => {
    console.log("user signed out")
  }).catch((error) => {
    console.log(error.code)
    console.log(error.message)
  });
}
