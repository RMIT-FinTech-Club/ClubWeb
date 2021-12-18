/*
* In the current document, if the amount of .toggle-password-visibility elements matches that of .password-field
* elements, then add an eventListener to each .password-field element listening for the "input" event. On that event,
* display the matching .toggle-password-visibility element.
*
* Each .toggle-password-visibility element works as a button that listens for "click" event to toggle its matching
* .password-field type between type="text" and type="password". I.e. toggling the password visibility.
* */
const PWD_VIS_TOGGLES = document.querySelectorAll(".toggle-password-visibility");
const PWD_FIELDS = document.querySelectorAll(".password-field");

if (PWD_FIELDS.length === PWD_VIS_TOGGLES.length) {
  // Setting up eventListeners and handler logic for all .password-field elements
  for (let index = 0; index < PWD_FIELDS.length; index++) {
    PWD_FIELDS[index].addEventListener("input", function () {
      PWD_VIS_TOGGLES[index].setAttribute("style", "display: inline;");
    });
  }

  // Setting up eventListeners and handler logic for all .toggle-password-visibility elements
  for (let index = 0; index < PWD_VIS_TOGGLES.length; index++) {
    PWD_VIS_TOGGLES[index].addEventListener("click", function () {
      if (PWD_FIELDS[index].getAttribute("type") === "password") {
        PWD_FIELDS[index].setAttribute("type", "text");
      } else if (PWD_FIELDS[index].getAttribute("type") === "text") {
        PWD_FIELDS[index].setAttribute("type", "password");
      }
    });
  }
} else {
  // Disable password toggling feature and display a console error message
  console.log("ERROR: Number of .password-field elements must be equal to number of .toggle-password-visibility elements. All .toggle-password-visibility elements are disabled.");
}



// // localStorage initialization
// if (localStorage.getItem("isLoggedIn") === null) {
//   localStorage.setItem("isLoggedIn", "false");
// }

// const CORRECT_PWD = "password";
// const LOGIN_FORM = document.getElementById("login-form");

// Check entered password with correct password
// LOGIN_FORM.addEventListener("submit", function (event) {
//   // Get email and password values, and wrong password message
//   const ENTERED_EMAIL = LOGIN_FORM.email.value;
//   const ENTERED_PWD = LOGIN_FORM.password.value;
//   const WRONG_PWD_MSG = document.getElementById("wrong-pwd");
//
//   // Set email value as local storage item
//   localStorage.setItem("email", ENTERED_EMAIL);
//
//   if (ENTERED_PWD !== CORRECT_PWD) {
//     // Display wrong password message
//     WRONG_PWD_MSG.setAttribute("style", "display: block");
//     event.preventDefault();   // Stop form from submitting
//     return false;
//   } else {
//     // Set login status to 'true'
//     localStorage["isLoggedIn"] = "true";
//     return true;
//   }
// })

