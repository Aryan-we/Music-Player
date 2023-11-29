let song_image = document.getElementById("cover_photo")
let song_title = document.getElementById("title")
let song_singer = document.getElementById("singer")
let song_play = document.getElementById("play")
let song_prev = document.getElementById("prev")
let song_next = document.getElementById("next")



console.log(song_play)

let songs_list = [
 
    {
        name : 'High Rated Gabru',
        Image : './photos/img1.webp',
        Song : './songs/High Rated Gabru - Guru Randhawa_64-(PagalWorld.Ink).mp3',
        Singer : 'Guru Randhawa'
    },
    {
        name : 'Lagdi Lahore Di',
        Image : './photos/img2.webp',
        Song : './songs/Lagdi Lahore Di (Street Dancer 3D)_64-(PagalWorld.Ink).mp3',
        Singer : 'Guru Randhawa'
    },
    {
        name : 'Outfit',
        Image : './photos/img3.webp',
        Song : './songs/Outfit (Ujda Chaman)_64-(PagalWorld.Ink).mp3',
        Singer : 'Guru Randhawa'
    },
    {
        name : 'Patola',
        Image : './photos/img7.jpg',
        Song : './songs/Patola (Blackmail)_64-(PagalWorld.Ink).mp3',
        Singer : 'Guru Randhawa'
    },
  
]

let i=0;
let flag=false;

var audio = new Audio(songs_list[i].Song);
song_image.src = songs_list[i].Image
song_title.innerHTML = songs_list[i].name
song_singer.innerHTML = songs_list[i].Singer

song_play.addEventListener("click", function(){

    if(flag ===false){
        audio.play()
        flag=true;
        console.log(flag)
    }
    else{
        audio.pause()
        flag=false;
        console.log(flag)
    }
})

song_next.addEventListener("click", function(){
    
    audio.pause()
    flag = false;
    i = i+1;
    if(i>=songs_list.length){
        
        i=0;
    }
    console.log(i)
    song_image.src = songs_list[i].Image
    song_singer.innerHTML = songs_list[i].Singer
    song_title.innerHTML = songs_list[i].name
    audio = new Audio(songs_list[i].Song)
    if(flag ===false){
        audio.play()
        flag=true;
        console.log(flag)
    }
    
})

song_prev.addEventListener("click", function(){
    
    audio.pause()
    flag = false;
    i = i-1;
    if(i<=0){
        i=songs_list.length-1;
        console.log(i)
    }
    song_image.src = songs_list[i].Image
    song_singer.innerHTML = songs_list[i].Singer
    song_title.innerHTML = songs_list[i].name
    audio = new Audio(songs_list[i].Song)
    if(flag ===false){
        audio.play()
        flag=true;
        console.log(flag)
    }
    
    
})
