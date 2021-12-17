// import functions from SDKs that we need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { v4 as uuidv4 } from "uuid";
import {
  getDocs,
  collection,
  getFirestore,
  setDoc,
  doc,
} from "@firebase/firestore";
import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import axios from "axios";

const firebaseConfig = {
  apiKey: "AIzaSyAxeZlaswV1d8mk5YC7oPKcKROiF7bQ4kk",
  authDomain: "rmit-fintech-club-web.firebaseapp.com",
  projectId: "rmit-fintech-club-web",
  storageBucket: "rmit-fintech-club-web.appspot.com",
  messagingSenderId: "143874417921",
  appId: "1:143874417921:web:7df4f4d3d9944a7d24a700",
  measurementId: "G-4E3JCYWVYW",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
export const db = getFirestore(app);


const headerBtn = document.querySelector("#header-btn");

// track user's authentication state
onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log(user.email);

    // sign out
    if (headerBtn) {
      headerBtn.innerHTML = "Sign out"
      headerBtn.addEventListener("click", () => {
        signOut(auth)
          .then(() => {
            console.log("user signed out");
          })
          .catch((error) => {
            console.log(error.code);
            console.log(error.message);
          });
      });
    }
  } else {
    // redirect to login when not signed in
    console.log("User is no longer signed in");
    // window.location.href = "../../pages/login.html"
    if (headerBtn) {
      headerBtn.innerHTML = "Sign in"
    }
  }
});


// Login
const loginForm = document.querySelector("#login-form");
if (loginForm) {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.querySelector("#email").value;
    const pwd = document.querySelector("#pwd").value;

    signInWithEmailAndPassword(auth, email, pwd)
      // redirect to next page if successful
      .then((cred) => {
        console.log(cred.user.email + " signed in");
        window.location.href = "../../../ClubWeb/index.html"
      })
      .catch((error) => {
        // see error
        console.log(error.code);
        console.log(error.message);
      });
  });
}


// get all members' data
const getAllMembersFromContact = async () => {
  try {
    const data = await axios.get(
      "https://api.sheety.co/d6e80a2492a162dc74634471da3a2944/[ftc]Members'Contact/contacts"
    );
    return data.data.contacts;
  } catch (error) {
    console.log(error.message);
  }
};


// Create new user
const createUserBtn = document.querySelector("#create-user-btn");
if (createUserBtn) {
  createUserBtn.addEventListener("click", async () => {
    const email = document.querySelector("#email").value;
    // create 10-character random password
    const randomPwd = Math.random().toString(36).slice(-10);
    const listOfUsers = collection(db, "users");
    const listOfUsersSnapshot = await getDocs(listOfUsers);
    const listOfUsersList = listOfUsersSnapshot.docs.map((doc) => doc.data());
    console.log(listOfUsersList);
    const members = await getAllMembersFromContact();
    members.map(async (member) => {
      console.log(members, member);
      await setDoc(
        doc(db, "users", member.email),
        {
          "#": member["#"],
          middleName: member["family &MiddleName"],
          firstName: member["firstName"],
          status: member["status"],
          doB: member["doB"],
          yoB: member.yoB,
          department: member.department,
          phoneNumber: member.phoneNumber,
          email: member.email,
          facebookLink: member.facebookLink,
          id: 2,
          subscribe: false,
        },
        { merge: true }
      );
    });
    // Store to firestore

    // db.collection("users")
    //   .add({
    //     name: "Phan Le Minh An",
    //     school: "SBM",
    //     major: "Econ Fin",
    //     studentId: "s3818487",
    //     subscribe: false,
    //     createdAt: new Date(),
    //   })
    //   .then((doc) => {
    //     console.log("successful sign up " + doc);
    //   });

    // createUserWithEmailAndPassword(auth, email, randomPwd)
    //   .then((cred) => {
    //     console.log("successful sign up " + cred.user.email);
    //   })
    //   .catch((error) => {
    //     console.log(error.code)
    //     console.log(error.message)
    //   });

    // Store to Sheety
  });
}


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
