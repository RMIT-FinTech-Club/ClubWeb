require("dotenv").config();

const { FIREBASE_PROJECT_ID, FIREBASE_PRIVATE_KEY, FIREBASE_CLIENT_EMAIL } =
  process.env;

const env = {
  firebase: {
    PROJECT_ID: FIREBASE_PROJECT_ID,
    PRIVATE_KEY: FIREBASE_PRIVATE_KEY,
    CLIENT_EMAIL: FIREBASE_CLIENT_EMAIL,
  },
};

module.exports = env;
