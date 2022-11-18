console.log("welcome to jinger music");

// initialize the variable
let songIndex = 0;
let audioElement = new Audio("music/1.mp3");
let masterplay = document.getElementById('masterplay');
let myprogressBar = document.getElementById('myprogressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let songItemplay = Array.from(document.getElementsByClassName('songItemplay'));
// audioElement.play();


let songs = [
    { songName: "kesariya-tera-ishq", filePath: "music/1.mp3", coverPath: "cover/1.jpg" },
    { songName: "Katu Kaise Raatan O Saware", filePath: "music/2.mp3", coverPath: "cover/2.jpg" },
    { songName: "Khushi Ke Pal Kahan Dhundu", filePath: "music/3.mp3", coverPath: "cover/3.jpg" },
    { songName: "Meri Dhadkan Tumko Chahe", filePath: "music/4.mp3", coverPath: "cover/4.jpg" },
    { songName: "Na Chain Se Jeene Degi Na ", filePath: "music/5.mp3", coverPath: "cover/5.jpg" },
    { songName: "Ye Dil Ki Naram Gustakhiyan ", filePath: "music/6.mp3", coverPath: "cover/6.jpg" },
    { songName: "Maine Tera Naam Dil Rakh Diya ", filePath: "music/7.mp3", coverPath: "cover/6.jpg" },



]
songItems.forEach((Element, i) => {
        // console.log(Element, i);
        Element.getElementsByTagName("img")[0].src = songs[i].coverPath;
        Element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
    })
    // handle play/pause click
masterplay.addEventListener('click', () => {
        if (audioElement.paused || audioElement.currentTime <= 0) {
            audioElement.play();
            masterplay.classList.remove('fa-play-circle');
            masterplay.classList.add('fa-pause-circle');
            gif.style.opacity = 1;
        } else {
            audioElement.pause();
            masterplay.classList.remove('fa-pause-circle');
            masterplay.classList.add('fa-play-circle');
            gif.style.opacity = 0;
        }

    })
    // listen to events
audioElement.addEventListener('timeupdate', () => {
    // console.log('timeupdate');
    // seekbar update
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    // console.log(progress);
    myprogressBar.value = progress;

})
myprogressBar.addEventListener('change', () => {
    audioElement.currentTime = myprogressBar.value * audioElement.duration / 100;
})
const makeAllplays = () => {
    Array.from(document.getElementsByClassName(' songItemplay')).forEach((Element) => {
        Element.classList.remove('fa-pause-circle');
        Element.classList.add('fa-play-circle');
    })
}
Array.from(document.getElementsByClassName('songItemplay')).forEach((Element) => {
    Element.addEventListener('click', (e) => {


        makeAllplays();

        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');

        audioElement.src = `music/${songIndex+1}.mp3 `;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 1;
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');



    })
})
document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 6) {
        songIndex = 0
    } else {
        songIndex += 1;
    }
    audioElement.src = `music/${songIndex+1}.mp3 `;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 1;
    audioElement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');


})

document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 0
    } else {
        songIndex -= 1;
    }
    audioElement.src = `music/${songIndex+1}.mp3 `;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 1;
    audioElement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');

})