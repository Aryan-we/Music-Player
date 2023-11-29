const cartoonAudio = new Audio('./songs/Proper-Patola---Namaste-England(PagalWorld).mp3');
const forceAudio = new Audio('./songs/Kya-Baat-Ay---Harrdy-Sandhu(PagalWorld).mp3');
const squeakyAudio = new Audio('./songs/Sakhiyaan---Maninder-Buttar(PagalWorld).mp3');
const hopeAudio = new Audio('./songs/Slowly-Slowly---Guru-Randhawa-Ft.-Pitbull(PagalWorld).mp3');
const janjiAudio = new Audio('./songs/Ghoomar---Padmaavat(PagalWorld).mp3');

// selecting elements
const prevBtn = document.querySelector('.previous');
const playBtn = document.querySelector('.play-pause');
const nextBtn = document.querySelector('.next');
const songName = document.querySelector('.song-name');
const playPauseIcon = document.querySelector('#play-pause-icon');


const songs = [
  { ele: cartoonAudio, audioName: 'Proper Patola (Badshah,Diljit Dosanjh,Aastha Gill)' },
  { ele: forceAudio, audioName: 'Kya Baat Ay (Harrdy-Sandhu)' },
  { ele: squeakyAudio, audioName: 'Sakhiyaan (Maninder-Buttar)' },
  { ele: hopeAudio, audioName: 'Slowly-Slowly (Guru-Randhawa , Pitbull)' },
  { ele: janjiAudio, audioName: 'Ghoomar (Padmaavat)' },
];

for(const song of songs) {
  song.ele.addEventListener('ended', ()=> {
    updateSong('next');
    playPauseSong();
  })
}

let current = 0;
let currentSong = songs[current].ele;
songName.textContent = songs[current].audioName;

playBtn.addEventListener('click',()=> {
  playPauseSong();
})

nextBtn.addEventListener('click', () => {
  updateSong('next');
  playPauseSong();
});

prevBtn.addEventListener('click', () => {
  updateSong('prev');
  playPauseSong();
});

const updateSong = (action)=> {
  currentSong.pause();
  currentSong.currentTime = 0;

  if(action === 'next'){
    current++;
    if(current > songs.length -1) current = 0;
  }
  if(action === 'prev'){
    current--;
    if(current < 0) current = songs.length - 1;
  }
  currentSong = songs[current].ele;
  songName.textContent = songs[current].audioName;
}

const playPauseSong = ()=> {
  if(currentSong.paused){
    currentSong.play();
    playPauseIcon.className = 'ph-bold ph-pause';
  }
  else {
    currentSong.pause();
    playPauseIcon.className = 'ph-bold ph-play';
  }
}
