// Get the modal
var modal = document.getElementById("modal-container")

// Get the button that opens the modal
var button = document.getElementById("see-more-btn")

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0]

// Get the link that opens new window
var links = document.getElementsByClassName("links")[0]

// When the user clicks the button, open the modal
button.onclick = function () {
  modal.style.display = "block"
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none"
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none"
  }
}
// When the user clicks the accessed link, close it
links.onclick = function () {
  modal.style.display = "none"
}
