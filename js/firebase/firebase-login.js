import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();
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
