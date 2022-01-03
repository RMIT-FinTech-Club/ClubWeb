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

//Podcast in Homepage starts here
let previous = document.querySelector('#pre');
let play = document.querySelector('#play');
let next = document.querySelector('#next');
let slider = document.querySelector('#duration_slider');
let show_duration = document.querySelector('#show_duration');

let timer;
let autoplay = 0;

let index_no = 0;
let playing_song = false;

//create a audio Element
let track = document.createElement('audio');

//podcast list
let podcast = [{
  name: "EPISODE 3: STABLECOIN & TETHER",
  path: "assets/sounds/Fintech podcast ep3 .mp3",
}];

//functions start here

//load the track
function load_track(index_no) {
  clearInterval(timer);
  reset_slider();
  track.src = podcast[index_no].path;
  track.load();
  timer = setInterval(range_slider, 1000);
}
load_track(index_no);

//check if the podcast is playing or not
function justplay() {
  if (playing_song == false) {
    play_podcast();
  } else {
    pause_podcast();
  }
}

//reset song slider
function reset_slider() {
  slider.value = 0;
}

//play song
function play_podcast() {
  track.play();
  playing_song = true;
  play.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
}

//pause song
function pause_podcast() {
  track.pause();
  playing_song = false;
  play.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
}

//next podcast
function next_podcast() {
  if (index_no < podcast.length - 1) {
    index_no += 1;
    load_track(index_no);
    play_podcast();
  } else {
    index_no = 0;
    load_track(index_no);
    play_podcast();
  }
}

//previous song
function previous_song() {
  if (index_no > 0) {
    index_no -= 1;
    load_track(index_no);
    play_podcast();

  } else {
    index_no = podcast.length;
    load_track(index_no);
    play_podcast();
  }
}

//change slider position
function change_duration() {
  slider_position = track.duration * (slider.value / 100);
  track.currentTime = slider_position;
}


function range_slider() {
  let position = 0;
  //update slider position
  if (!isNaN(track.duration)) {
    position = track.currentTime * (100 / track.duration);
    slider.value = position;
  }
  //function will run when the podcast is over
  if (track.ended) {
    play.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
    if (autoplay == 1) {
      index_no += 1;
      load_track(index_no);
      play_podcast();
    }
  }
}
