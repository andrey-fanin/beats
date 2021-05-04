// let player;
// const playerContainer = $('.player');


// let eventsInit = () => {
//     $('.player__start').click(e => {
//         e.preventDefault();

//         if (playerContainer.hasClass('paused')) {
//             player.pause();                              // по клику старт, если видео было на паузе
//         } else {
//             player.play();                               // по клику пауза, если видео проигрывалось
//         }
//     });

//     $('.player__playback').click(e => {                        // по клику на прокрутку перематываем видос
//         const bar = $(e.currentTarget);

//         const clickedPosition = e.originalEvent.layerX;
//         const newButtonPositionPercent = (clickedPosition / bar.width()) * 100;
//         const newPlaybackPositionSec = (player.getDuration() / 100) * newButtonPositionPercent;

//         $('.player__playback-button').css({
//             left: `${newButtonPositionPercent}%`
//         });

//         player.seekTo(newPlaybackPositionSec);
//     })
    
//     $('.player__volume').click(e => {
//         const volBar = $(e.currentTarget);

//         const clickedVol = e.originalEvent.layerX;
//         const newButtonPositionVolPercent = (clickedVol / volBar.width()) * 100;
//         const newVolPosition = clickedVol / volBar.width();

        
//         $('.player__volume-button').css({
//             left: `${newButtonPositionVolPercent}%`
//         });

//         player.volume(newVolPosition);      
//     });
    
//     $('.player__splash').click(e => {
//         player.play();
//     })

// };

// const formatTime = timeSec => {
//     const roundTime = Math.round(timeSec);

//     const minutes = addZero(Math.floor(roundTime / 60));
//     const seconds = addZero(roundTime - minutes * 60);

//     function addZero(num) {                                   // функция, чтобы на видосах короче 10 минут в начале был нолик
//         return num < 10 ? `0${num}`:num;
//     }

//     return `${minutes}:${seconds}`;                         // время возвращается в обычном формате
// };  

// const onPlayerReady = () => {
//     let interval;
//     const durationSec = player.getDuration();

//     $('.player__duration-estimate').text(formatTime(durationSec));

//     if (typeof interval != 'undefined') {
//         clearInterval(interval);
//     }

//     interval = setInterval(() => {
//         const completedSec = player.getCurrentTime();
//         const completedPercent = (completedSec / durationSec) * 100;

//         $('.player__playback-button').css({                     // полоска прокрутки двигается параллельно текущей точке видео
//             left: `${completedPercent}%` 
//         });

//         $('.player__duration-completed').text(formatTime(completedSec));
//     }, 1000);                                                   //  сколько секунд видоса прошло - столько и отобразилось
// };

// const onPlayerStateChange = event => {

//     // -1 (воспроизведение видео не начато)
//     // 0 (воспроизведение видео завершено)
//     // 1 (воспроизведение)
//     // 2 (пауза)
//     // 3 (буферизация)
//     // 5 (видео подают реплики).

//     switch (event.data) {
//         case 1:
//             playerContainer.addClass('active');
//             playerContainer.addClass('paused');
//             break;

//         case 2:
//             playerContainer.removeClass('active');
//             playerContainer.removeClass('paused');
//             break;
//     }
// }

// function onYouTubeIframeAPIReady() {
//     player = new YT.Player('yt-player', {
//         height: '405',
//         width: '660',
//         videoId: 'M7lc1UVf-VE',
//         events: {
//         'onReady': onPlayerReady,
//         'onStateChange': onPlayerStateChange
//         },
//         playerVars: {                                           // убираем стандартные элементы интерфейса, которые сделаем сами
//             controls: 0,
//             disablekb: 0,
//             showinfo: 0,
//             rel: 0,
//             autoplay: 0,
//             modestbranding: 0
//         }
//     });
// }

// eventsInit();


/// О господи, это же HTML5 решение!!!!111

const playerContainer = document.querySelector('.player');
const playerWrapper = document.querySelector('.player__content');
const video = document.querySelector('#myvideo');
const playerStart = document.querySelector('.player__start');
const playerPlayback = document.querySelector('.player__playback');
const progressBar = document.querySelector('.player__playback-line');
const playerVideoCircle = document.querySelector('.player__playback-button');
const playerVolumeIcon = document.querySelector('.player__volume-svg');
const playerVolumeBar = document.querySelector('.player__volume');
const playerVolumeCirlce = document.querySelector('.player__volume-button');
let startVolume = 0;
let currentVolume;

/// запуск

const handleStart = () => {
    video.paused ? video.play() : video.pause();
    // if(video.paused) {
    //     video.play();
    // } else {
    //     video.pause();
    // }
}

playerStart.addEventListener('click', handleStart);
playerWrapper.addEventListener('click', handleStart);


/// play/pause

video.onplay = () => {
    togglePlayer();
}

video.onpause = () => {
    togglePlayer('pause');
}

const togglePlayer = ( action = 'start') => {
    action === 'start' ? playerContainer.classList.add('player_active') : playerContainer.classList.remove('player_active');
}


/// изменение звука 

const changeVolume = (e) => {
    // const {currentTarget} = e;
    const currentTarget = e.currentTarget;
    const left = currentTarget.getBoundingClientRect().left;
    const soundBarWidth = parseInt(getComputedStyle(currentTarget).width);
    const newPosition = e.pageX - left;
    const percentValue = (newPosition / soundBarWidth) * 100;
    if (percentValue < 100) {
        video.volume = percentValue / 100;
        playerVolumeCirlce.style.left = `${percentValue}%`;
    }
}


const toggleSound = () => {
    playerVolumeIcon.classList.toggle('muted');

    if(video.volume === 0) {
    video.volume = currentVolume;
    playerVolumeCirlce.style.left = `${currentVolume * 100}%`;
    } else {
        currentVolume = video.volume;
        video.volume = startVolume;
        playerVolumeCirlce.style.left = `${startVolume}%`;
    }

    // muted video

    /// unmuted video
    
    
}

playerVolumeBar.addEventListener('click', changeVolume);
playerVolumeIcon.addEventListener('click', toggleSound);

const handleDuration = (e) => {
    const barSize = parseInt(getComputedStyle(playerPlayback).width);
    const cirlceWidth = parseInt(getComputedStyle(playerVideoCircle).width);
    // const {offsetX} = e;
    const offsetX = e.offsetX;
    const newSize = offsetX + cirlceWidth / 2;
    const newTime = (newSize * video.duration) / barSize;
    video.currentTime = newTime;
}

const updateTime = () => {
    let orangeBar = video.currentTime / video.duration;
    progressBar.style.width = `${orangeBar * 100}%`;

    if (video.ended) {
        video.currentTime = 0;
    }
}

playerPlayback.addEventListener('click', handleDuration);
video.addEventListener('timeupdate', updateTime);