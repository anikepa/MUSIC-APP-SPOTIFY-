var icon1 = document.querySelector('#icone1');
let audioElement = new Audio('./1.mp3');
var progress;
//audioElement.play();
var masterplay = document.querySelector('#masterplay');
var myprogressbar = document.querySelector('#myprogressbar')
var pre = document.querySelector("#pre")
var nex = document.querySelector("#nex")
var contaner = document.querySelector('.contaner');
/* song list*/
let songs = [
    { songn: "happy life", Filepath: "./songs/3.mp3", coverpath: "./covers/10.jpg" },
    { songn: "happy go lucky", Filepath: "./songs/2.mp3 ", coverpath: "./covers/1.jpg" },
    { songn: "turn it up", Filepath: "./songs/4.mp3", coverpath: "./covers/2.jpg" },
    { songn: "motivate", Filepath: "./songs/5.mp3", coverpath: "./covers/3.jpg" },
    { songn: "turn it up", Filepath: "./songs/7.mp3", coverpath: "./covers/4.jpg" },
    { songn: "bright and happy", Filepath: "./songs/7.mp3", coverpath: "./covers/5.jpg" },
    { songn: "motivate", Filepath: "./songs/7.mp3", coverpath: "./covers/6.jpg" },
    { songn: "turn it up", Filepath: "./songs/7.mp3", coverpath: "./covers/7.jpg" },
    { songn: "happy life", Filepath: "./songs/7.mp3", coverpath: "./covers/8.jpg" },
    { songn: "motivate", Filepath: "./songs/7.mp3", coverpath: "./covers/9.jpg" },
]

const main = () => {


    clutter = "";
    songs.forEach(function (e, i) {
        clutter += `
    <div class="songlist" >
        <img src="${e.coverpath}">
        <span>${e.songn}</span><span class="timestamp"> 05:34  
        </span>
        <audio src="${e.Filepath}"></audio>
    </div>
  `
    })
    contaner.innerHTML = clutter;
}



main();
var flag = 0;
var master1 = document.querySelector('.master1');

master1.addEventListener('click', function () {
    if (flag === 0) {
        audioElement.play()
        master1.innerHTML = `<i class="ri-stop-circle-line"></i>`;
        flag = 1;
    }
    else {
        master1.innerHTML = `<i id="masterplay" class="ri-play-circle-fill"></i>`;
        audioElement.pause();

        flag = 0;
    }
})


masterplay.addEventListener('click', function () {

    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play()

    }
    else {
        audioElement.pause();
    }
})



/* update progress bar */
audioElement.addEventListener('timeupdate', function () {

    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100)
    myprogressbar.value = progress;
})

/* manage seak bar */
myprogressbar.addEventListener('change', function () {
    audioElement.currentTime = myprogressbar.value * audioElement.duration / 100;

})

/* song change feature */
var songindex = 0;
var songlist = document.querySelector('.songlist');

nex.addEventListener('click', function () {
    songindex++;
    audioElement.src = `${songs[songindex].Filepath}`
    audioElement.play()
})
console

pre.addEventListener('click', function () {
    songindex--;
    audioElement.src = `${songs[songindex].Filepath}`
    audioElement.play()

})





play2 = document.querySelector('#play2');
var ind = 1;








 
contaner.addEventListener('click', function (data, index) {
    index1 = songs[data.target.id]
    ind++;
    audioElement.src = `./songs/${ind}.mp3`
    audioElement.play()





    main();
})



 







