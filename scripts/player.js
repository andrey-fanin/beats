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

let player;
const playerContainer = $('.player');
var vid = $('#myvideo');

let eventsInit = () => {
    $('.player__start').click(e => {
        e.preventDefault();

        if (playerContainer.hasClass('paused')) {
            vid.pause();                              // по клику старт, если видео было на паузе
        } else {
            vid.play();                               // по клику пауза, если видео проигрывалось
        }
    });

    $('.player__playback').click(e => {                        // по клику на прокрутку перематываем видос
        const bar = $(e.currentTarget);

        const clickedPosition = e.originalEvent.layerX;
        const newButtonPositionPercent = (clickedPosition / bar.width()) * 100;
        const newPlaybackPositionSec = (vid.duration() / 100) * newButtonPositionPercent;

        $('.player__playback-button').css({
            left: `${newButtonPositionPercent}%`
        });

        player.seeking(newPlaybackPositionSec);
    })
    
    $('.player__volume').click(e => {
        const volBar = $(e.currentTarget);

        const clickedVol = e.originalEvent.layerX;
        const newButtonPositionVolPercent = (clickedVol / volBar.width()) * 100;
        const newVolPosition = clickedVol / volBar.width();

        
        $('.player__volume-button').css({
            left: `${newButtonPositionVolPercent}%`
        });

        player.volume(newVolPosition);      
    });
    
    $('.player__splash').click(e => {
        player.play();
    })

};

const formatTime = timeSec => {
    const roundTime = Math.round(timeSec);

    const minutes = addZero(Math.floor(roundTime / 60));
    const seconds = addZero(roundTime - minutes * 60);

    function addZero(num) {                                   // функция, чтобы на видосах короче 10 минут в начале был нолик
        return num < 10 ? `0${num}`:num;
    }

    return `${minutes}:${seconds}`;                         // время возвращается в обычном формате
};  

const onPlayerReady = () => {
    let interval;
    const durationSec = vid.duration();

    $('.player__duration-estimate').text(formatTime(durationSec));

    if (typeof interval != 'undefined') {
        clearInterval(interval);
    }

    interval = setInterval(() => {
        const completedSec = vid.currentTime();
        const completedPercent = (completedSec / durationSec) * 100;

        $('.player__playback-button').css({                     // полоска прокрутки двигается параллельно текущей точке видео
            left: `${completedPercent}%` 
        });

        $('.player__duration-completed').text(formatTime(completedSec));
    }, 1000);                                                   //  сколько секунд видоса прошло - столько и отобразилось
};

const onPlayerStateChange = event => {

    // -1 (воспроизведение видео не начато)
    // 0 (воспроизведение видео завершено)
    // 1 (воспроизведение)
    // 2 (пауза)
    // 3 (буферизация)
    // 5 (видео подают реплики).

    switch (event.data) {
        case 1:
            playerContainer.addClass('active');
            playerContainer.addClass('paused');
            break;

        case 2:
            playerContainer.removeClass('active');
            playerContainer.removeClass('paused');
            break;
    }
}

function onYouTubeIframeAPIReady() {
    player = new YT.Player('yt-player', {
        height: '405',
        width: '660',
        videoId: 'M7lc1UVf-VE',
        events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
        },
        playerVars: {                                           // убираем стандартные элементы интерфейса, которые сделаем сами
            controls: 0,
            disablekb: 0,
            showinfo: 0,
            rel: 0,
            autoplay: 0,
            modestbranding: 0
        }
    });
}

eventsInit();
