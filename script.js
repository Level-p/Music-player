const musciContainer = document.getElementById('music-container');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const audio = document.getElementById('audio');
const progress = document.getElementById('progress');
const progressContainer = document.getElementById('progress-container');
const title = document.getElementById('title');
const cover = document.getElementById('cover');
const nextBtn = document.getElementById('next');

// // Song titles
// const songs = ['hey', 'summer', 'ukulele'];


// // Keep track of song
// let songIndex = 0;

// // Initially load song details into DOM
// loadSong(songs[songIndex]);

// function loadSong (song) {
//   title.innerText = song;
//   audio.src=`music-player/music/${song}.mp3`
//   cover.src=`music-player/images/${song}.jpg`
// }

// // Play Song
// function playSong() {
//   musciContainer.classList.add('play');
//   playBtn.querySelector('i.fas').classList.remove('fa-play')
//   playBtn.querySelector('i.fas').classList.add('fa-pause')

//   audio.play();
// }

// // Pause Song
// function pauseSong() {
//   musciContainer.classList.remove('play');
//   playBtn.querySelector('i.fas').classList.add('fa-play')
//   playBtn.querySelector('i.fas').classList.remove('fa-pause')

//   audio.pause();
// }

// // Previous song
// function prevSong() {
//   songIndex--;

//   if(songIndex < 0) {
//     songIndex = songs.length - 1;
//   }

//   loadSong(songs[songIndex]);

//   playSong();
// }

// // Next song
// function nextSong() {
//   songIndex++;

//   if(songIndex > songs.length - 1) {
//     songIndex = 0;
//   }

//   loadSong(songs[songIndex]);

//   playSong();
// }

// // Update progress bar
// function updateProgress(e) {
//   const { duration, currentTime} = e.srcElement;
//   const progressPercent = (currentTime / duration) * 100;
//   progress.style.width = `${progressPercent}%`
// }

// // Set progress bar
// function setProgress(e) {
//   const width = this.clientWidth;
//   const clickX = e.offsetX;
//   // console.log(e)
//   const duration = audio.duration;
//   // console.log(duration);
//   audio.currentTime = (clickX / width) * duration;
// }

// // Event Listeners
// playBtn.addEventListener('click', ()=> {
//   const isPlaying = musciContainer.classList.contains('play');

//   if(isPlaying) {
//     pauseSong();
//   } else {
//     playSong();
//   }
// })

// // Change song
// prevBtn.addEventListener('click', prevSong)
// nextBtn.addEventListener('click', nextSong)

// // Time/song update
// audio.addEventListener('timeupdate', updateProgress)

// // Click on progress bar 
// progressContainer.addEventListener('click', setProgress)

// // Song Ends
// audio.addEventListener('ended', nextSong)



const songs = ['hey', 'summer', 'ukulele'];

let songIndex = 0;

loadSong(songs[songIndex])

function loadSong(song) {
  title.innerText = song
  audio.src = `music-player/music/${song}.mp3`;
  cover.src = `music-player/images/${song}.jpg`;
}

function playSong() {
  musciContainer.classList.add('play')
  playBtn.querySelector('i.fas').classList.remove('fa-play')
  playBtn.querySelector('i.fas').classList.add('fa-pause')

  audio.play()
}

function pauseSong() {
  musciContainer.classList.remove('play')
  playBtn.querySelector('i.fas').classList.remove('fa-pause')
  playBtn.querySelector('i.fas').classList.add('fa-play')

  audio.pause()
}

function nextSong() {
  songIndex++;

  if(songIndex > songs.length - 1) {
    songIndex = 0
  }

  loadSong(songs[songIndex])
  playSong();
}

function prevSong () {
  songIndex --;

  if(songIndex < 0) {
    songIndex = songs.length - 1;
  }

  loadSong(songs[songIndex])
  playSong()
}

function updateTime(e) {
  const { duration, currentTime} = e.srcElement;
  const progressPercent = (currentTime / duration) * 100;
  progress.style.width = `${progressPercent}%`
}

function setProgress(e) {
  const clickX = e.offsetX;
  const width = this.clientWidth;
  const duratiom = audio.duration;
  audio.currentTime = (clickX / width) * duratiom;
}

playBtn.addEventListener('click', () => {
  const isPlaying = musciContainer.classList.contains('play')
  if(isPlaying) {
    pauseSong()
  } else {
    playSong()
  }
})

nextBtn.addEventListener('click', nextSong);
prevBtn.addEventListener('click', prevSong)

audio.addEventListener('timeupdate', updateTime)

progressContainer.addEventListener('click' , setProgress)

audio.addEventListener('ended', nextSong)