// source of spotify podcast eps (1 to latest)
const spotifyPodcasts = [
  "https://open.spotify.com/embed/episode/4g7tVZk3MJQNGZU14rMFzu?utm_source=generator",
  "https://open.spotify.com/embed/episode/2szc79vEhkESgNAMYInAf9?utm_source=generator",
  "https://open.spotify.com/embed/episode/2C0eiVMeNYIex5OEPQXhLm?utm_source=generator",
  "https://open.spotify.com/embed/episode/3BKByrghO9kybXv0VmDErL?utm_source=generator",
  "https://open.spotify.com/embed/episode/5601Q6WjtD2VWSxwy7PJT3?utm_source=generator",
]
let idx = spotifyPodcasts.length - 1

const prevBtn = document.getElementById("prev-btn")
const nextBtn = document.getElementById("next-btn")
const spotifyPodcastPlayer = document.getElementById("spotify-podcast")

if (idx >= 0) {
  updatePodcastPlayer(idx)
}

prevBtn.addEventListener("click", (event) => {
  if (idx === 0) return
  updatePodcastPlayer(--idx)
})

nextBtn.addEventListener("click", (event) => {
  if (idx === spotifyPodcasts.length - 1) return
  updatePodcastPlayer(++idx)
})

function updatePodcastPlayer(srcIdx) {
  spotifyPodcastPlayer.src = spotifyPodcasts[srcIdx]
  prevBtn.style.visibility = idx === 0 ? "hidden" : "visible"
  nextBtn.style.visibility = idx === spotifyPodcasts.length - 1 ? "hidden" : "visible"
}
