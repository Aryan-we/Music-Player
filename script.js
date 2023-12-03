const song1= new Audio('./songs/Proper-Patola---Namaste-England(PagalWorld).mp3');
const song2 = new Audio('./songs/Kya-Baat-Ay---Harrdy-Sandhu(PagalWorld).mp3');
const song3= new Audio('./songs/Sakhiyaan---Maninder-Buttar(PagalWorld).mp3');
const song4= new Audio('./songs/Slowly-Slowly---Guru-Randhawa-Ft.-Pitbull(PagalWorld).mp3');
const song5 = new Audio('./songs/Ghoomar---Padmaavat(PagalWorld).mp3');

// selecting elements
const prevBtn = document.querySelector('.previous');
const playBtn = document.querySelector('.play-pause');
const nextBtn = document.querySelector('.next');
const songName = document.querySelector('.song-name');
const playPauseIcon = document.querySelector('#play-pause-icon');


const songs = [
  { ele: song1, audioName: 'Proper Patola (Badshah,Diljit Dosanjh,Aastha Gill)' },
  { ele: song2, audioName: 'Kya Baat Ay (Harrdy-Sandhu)' },
  { ele: song3, audioName: 'Sakhiyaan (Maninder-Buttar)' },
  { ele: song4, audioName: 'Slowly-Slowly (Guru-Randhawa , Pitbull)' },
  { ele: song5, audioName: 'Ghoomar (Padmaavat)' },
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
