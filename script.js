var a = document.getElementById("audio");
var playBtn = document.getElementById("play");
var pauseBtn = document.getElementById("pause");
var loadBtn = document.getElementById("load");
var muteBtn = document.getElementById("mute");
var volumeRange = document.getElementById("volume");
var speedRange = document.getElementById("speed");
var timeRange = document.getElementById("time");
var img = document.getElementById("img");
var audioName = document.getElementById("audioName");
var nextBtn = document.getElementById("next");
var prevBtn = document.getElementById("prev");
var songs = Array.from(document.querySelectorAll(".audioBtn"));
var currentIndex = 0;

playBtn.addEventListener("click", function () {
  a.play();
});

pauseBtn.addEventListener("click", function () {
  a.pause();
});

loadBtn.addEventListener("click", function () {
  a.load();
  a.pause();
});

muteBtn.addEventListener("click", function () {
  a.muted = !a.muted;
});

volumeRange.addEventListener("input", function () {
  a.volume = volumeRange.value;
});

speedRange.addEventListener("input", function () {
  a.playbackRate = speedRange.value;
});

a.addEventListener("loadedmetadata", function () {
  timeRange.max = a.duration;
});

timeRange.addEventListener("input", function () {
  a.currentTime = timeRange.value;
});

a.addEventListener("timeupdate", function () {
  timeRange.value = a.currentTime;
});

function playSong(index) {
  if (index >= 0 && index < songs.length) {
    var btn = songs[index];
    var newSrc = btn.getAttribute("data-src");
    var newImg = btn.getAttribute("data-img");
    var newName = btn.getAttribute("data-name");
    var newName = btn.innerText;
    a.src = newSrc;
    img.src = newImg;
    audioName.innerText = newName;
    a.load();
    a.play();
    currentIndex = index;
  }
}

nextBtn.addEventListener("click", function () {
  playSong((currentIndex + 1) % songs.length);
});

prevBtn.addEventListener("click", function () {
  playSong((currentIndex - 1 + songs.length) % songs.length);
});

songs.forEach(function (btn, index) {
  btn.addEventListener("click", function () {
    playSong(index);
  });
});
