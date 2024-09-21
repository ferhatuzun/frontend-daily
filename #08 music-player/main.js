let imagesBlur = document.querySelector(".images");
let musicImage = document.querySelector("#musicImage div");
let songName = document.querySelector(".songName");
let singerName = document.querySelector(".singerName");
let startTime = document.querySelector(".startTime");
let endTime = document.querySelector(".endTime");
let btnBackward = document.querySelector(".fa-backward");
let btnPlay = document.querySelector(".fa-play");
let btnForward = document.querySelector(".fa-forward");
let progressbar = document.querySelector(".progressbar");
let soundLevel = document.querySelector(".soundLevel");
let soundIcon = document.querySelector(".fa-solid");

window.onload = function () {


    let audio = new Audio();

    let songList = [
        {
            path: "music/tekir.mp3",
            songName: "Ağlaya Ağlaya",
            singerName: "Tekir",
            backroundPath: "image/tekir.jpg"
        },
        {
            path: "music/galaktik.mp3",
            songName: "Galaktik",
            singerName: "Allame & Joker",
            backroundPath: "image/galaktik.jfif"
        },
        {
            path: "music/cokicince.mp3",
            songName: "Çok İçince",
            singerName: "Eda Sakız",
            backroundPath: "image/cokicince.jpg"
        }
    ]

    let musicIndex = 1;
    let playOrPaouse = false;

    let loadMusic = (index) => {
        imagesBlur.style.backgroundImage = `url(${songList[index].backroundPath})`;
        musicImage.style.backgroundImage = `url(${songList[index].backroundPath})`;
        songName.textContent = songList[index].songName;
        singerName.textContent = songList[index].singerName;
        audio.src = songList[index].path

        audio.addEventListener("loadedmetadata", () => {
            progressbar.min = 0;
            progressbar.max = Math.floor(audio.duration)
            endTime.textContent = calculateTime(audio.duration)
            setInterval(() => {
                progressbar.value = audio.currentTime
                if (progressbar.value == progressbar.max) {
                    btnForward.click()
                }
            }, 1000)
            soundLevel.addEventListener("input", () => {
                audio.volume = soundLevel.value
            })
        })
        audio.addEventListener("timeupdate", () => {
            startTime.textContent = calculateTime(audio.currentTime)

        })
    }

    let calculateTime = (totalSecond) => {
        const minutes = Math.floor(totalSecond / 60);
        const second = Math.floor(totalSecond % 60);
        const updateSecond = second < 10 ? `0${second}` : `${second}`
        const updateMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`
        const format = `${updateMinutes}:${updateSecond}`
        return format

    }

    loadMusic(musicIndex)

    let togglePlay = () => {
        if (playOrPaouse) {
            pauseMusic();
        } else {
            playMusic();
        }
    }

    let playMusic = () => {
        playOrPaouse = true;
        btnPlay.classList.replace("fa-play", "fa-pause")
        audio.play()
    }

    let pauseMusic = () => {
        playOrPaouse = false;
        btnPlay.classList.replace("fa-pause", "fa-play")
        audio.pause();
    }


    btnPlay.addEventListener("click", () => {
        togglePlay();
    })

    btnBackward.addEventListener("click", () => {
        if (musicIndex > 0) {
            musicIndex -= 1
            loadMusic(musicIndex)
            playMusic();
        } else {
            musicIndex = songList.length - 1
            loadMusic(musicIndex);
            playMusic()
        }
    })

    btnForward.addEventListener("click", () => {
        if (musicIndex < songList.length - 1) {
            musicIndex += 1
            loadMusic(musicIndex)
            playMusic();
        } else {
            musicIndex = 0;
            loadMusic(musicIndex)
            playMusic();
        }

    })

    progressbar.addEventListener("mouseup", (e) => {
        audio.currentTime = e.target.value;
    })

    soundLevel.addEventListener("input",()=>{
        if(soundLevel.value==0){
            soundIcon.classList.replace("fa-volume-high","fa-volume-xmark")
        }else{
            soundIcon.className="fa-solid fa-volume-high"
        }
    })

    soundIcon.addEventListener("click",()=>{
        if(soundLevel.value>0){
            soundIcon.classList.replace("fa-volume-high","fa-volume-xmark")
            soundLevel.value=0
            audio.volume=0
        }else if(soundLevel.value==0){
            soundIcon.className="fa-solid fa-volume-high"
            soundLevel.value=0.5
            audio.volume=0.5
            
        }
    })


}

