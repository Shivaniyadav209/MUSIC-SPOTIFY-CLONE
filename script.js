console.log("Welcome to Spotify")

//initialize the variable
let songIndex = 0;
let audioElement = new Audio('song/1.mp3');
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let masterSongName = document.getElementById("masterSongName");
let songItems = Array.from(document.getElementsByClassName('songItem'));


//how to play the song
let songs = [
    { songName: "Love Me Like U Do", filePath: "song/1.mp3", coverPath: "covers/1.jpg" },
    { songName: "Besharam Rang", filePath: "song/2.mp3", coverPath: "covers/2.jpg" },
    { songName: "Maan Meri Jaan", filePath: "song/3.mp3", coverPath: "covers/3.jpg" },
    { songName: "Manike", filePath: "song/4.mp3", coverPath: "covers/4.jpg" },
    { songName: "Tu Aaja", filePath: "song/5.mp3", coverPath: "covers/5.jpg" },
    { songName: "Cheap thrills", filePath: "song/6.mp3", coverPath: "covers/6.jpg" },
    { songName: "On My Way", filePath: "song/7.mp3", coverPath: "covers/7.jpg" },
    { songName: "Dhokha", filePath: "song/8.mp3", coverPath: "covers/8.jpg" },
    { songName: "Heer Ranjha", filePath: "song/9.mp3", coverPath: "covers/9.jpg" },
    { songName: "Kesariya", filePath: "song/10.mp3", coverPath: "covers/10.jpg" },
    { songName: "Srivalli", filePath: "song/11.mp3", coverPath: "covers/11.jpg" },
    { songName: "Stay", filePath: "song/12.mp3", coverPath: "covers/12.jpg" },
    { songName: "Believer", filePath: "song/13.mp3", coverPath: "covers/13.jpg" }
]
// songItems.forEach((element,i)=>{
//     //isse hume ek ek song k name ya cover pag change krne ki need nhu pdegi
//   element.getElementsByTagName("img")[0].src=songs[i].coverPath;
//   element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
// })

// audioElement.play();

//handle play/pause click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 1;
    }
})

//listen to events
audioElement.addEventListener('timeupdate', () => {
    //    console.log('timeupdate');
    //update seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);  /*kitna percent chl chuka h*/
    //    console.log(progress);
    myProgressBar.value = progress;   /*isse progress set ho jayegi*/
})

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})
const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.add('fa-circle-play');
        element.classList.remove('fa-circle-pause');

    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `song/${songIndex + 1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');

    })
})
document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 12) {
        songIndex = 0;
    }
    else {
        songIndex += 1;
    }
    audioElement.src = `song/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');

})
document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 0;
    }
    else {
        songIndex -= 1;
    }
    audioElement.src = `song/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');

})