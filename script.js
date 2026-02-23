const songs = [
  { title: "Song 1", artist: "Artist A", src: "songs/song1.mp3" },
  { title: "Song 2", artist: "Artist B", src: "songs/song2.mp3" },
  { title: "Song 3", artist: "Artist C", src: "songs/song3.mp3" }
];

let currentIndex = 0;
let isPlaying = false;

const audio = document.getElementById("audio");
const playBtn = document.getElementById("play");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const playlist = document.getElementById("playlist");
const progress = document.getElementById("progress");
const progressContainer = document.getElementById("progress-container");
const currentTimeEl = document.getElementById("current-time");
const durationEl = document.getElementById("duration");
const volume = document.getElementById("volume");


// Load Playlist
songs.forEach((song, index) => {
  const li = document.createElement("li");
  li.textContent = song.title;
  li.addEventListener("click", () => loadSong(index));
  playlist.appendChild(li);
});

function loadSong(index) {
  currentIndex = index;
  audio.src = songs[index].src;
  title.textContent = songs[index].title;
  artist.textContent = songs[index].artist;

  document.querySelectorAll("li").forEach(li => li.classList.remove("active"));
  playlist.children[index].classList.add("active");

  playSong();
}

function playSong() {
  audio.play();
  isPlaying = true;
  playBtn.textContent = "⏸";
}

function pauseSong() {
  audio.pause();
  isPlaying = false;
  playBtn.textContent = "▶";
}

playBtn.addEventListener("click", () => {
  isPlaying ? pauseSong() : playSong();
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % songs.length;
  loadSong(currentIndex);
});

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + songs.length) % songs.length;
  loadSong(currentIndex);
});





