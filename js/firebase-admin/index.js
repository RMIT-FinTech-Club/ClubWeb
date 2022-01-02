// Import the functions you need from the SDKs you need
const firebase = require("firebase-admin");
const { cert } = require("firebase-admin/app");
const { CLIENT_EMAIL, PRIVATE_KEY, PROJECT_ID } =
  require("../config/env").firebase;

firebase.initializeApp({
  credential: cert({
    clientEmail: CLIENT_EMAIL,
    privateKey: PRIVATE_KEY.replace(/\\n/g, "\n"),
    projectId: PROJECT_ID,
  }),
});

const db = firebase.firestore();
module.exports = { db };
