// source of spotify podcast eps
let spotifyPodcast = [
  "https://open.spotify.com/embed/episode/3BKByrghO9kybXv0VmDErL?utm_source=generator",
  "https://open.spotify.com/embed/episode/2C0eiVMeNYIex5OEPQXhLm?utm_source=generator",
  "https://open.spotify.com/embed/episode/2szc79vEhkESgNAMYInAf9?utm_source=generator",
  "https://open.spotify.com/embed/episode/4g7tVZk3MJQNGZU14rMFzu?utm_source=generator"
]

const PREVIOUS_BTN = document.querySelector("#prev-btn")
const NEXT_BTN = document.querySelector("#next-btn")
const SPOTIFY_EPS = document.querySelector("#spotify-podcast")
// set latest podcast ep as the default ep when page first loads
SPOTIFY_EPS.setAttribute("src", spotifyPodcast[0])

// find index of the current source within the array
const findIdx = () => {
  const src = SPOTIFY_EPS.getAttribute("src")
  return spotifyPodcast.indexOf(src)
}

PREVIOUS_BTN.addEventListener("click", (event) => {
  const srcIdx = findIdx()
  // disable button if the current ep is the first ep in the array
  if (srcIdx === 0) {
    event.preventDefault()
  } else {
    // switch to previous ep
    SPOTIFY_EPS.src=spotifyPodcast[srcIdx - 1]
  }
})

NEXT_BTN.addEventListener("click", (event) => {
  const srcIdx = findIdx()
  // disable button if the current ep is the last ep in the array
  if (srcIdx === spotifyPodcast.length - 1) {
    event.preventDefault()
  } else {
    // switch to next ep
    SPOTIFY_EPS.src=spotifyPodcast[srcIdx + 1]
  }
})
