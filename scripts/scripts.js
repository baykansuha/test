// Example JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Your JavaScript code here
});


// const zoomButton = document.getElementById('zoomButton');

// zoomButton.addEventListener('click', function() {
//     zoomButton.classList.add('zoom-animation');

//     // Remove the animation class after the animation ends
//     setTimeout(function() {
//         zoomButton.classList.remove('zoom-animation');
//     }, 300); // Same duration as the animation (0.3s = 300ms)
// });

const videoId = 'kBDOcB75CVI'; // Replace with your YouTube video ID

const openButton = document.getElementById('openButton');
const popup = document.getElementById('popup');
const closeButton = document.getElementById('closeButton');

let player; // Declare the player variable

openButton.addEventListener('click', function() {
    popup.style.display = 'flex';
    createPlayer();
});

closeButton.addEventListener('click', function() {
    popup.style.display = 'none';
    stopVideo(); // Stop the video when the popup is closed
});

window.addEventListener('click', function(event) {
    if (event.target === popup) {
        popup.style.display = 'none';
        stopVideo(); // Stop the video when clicking outside the popup
    }
});

function createPlayer() {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    window.onYouTubeIframeAPIReady = function() {
        player = new YT.Player('player', {
            height: '390',
            width: '640',
            videoId: videoId,
        });
    };
}

function stopVideo() {
    if (player && player.stopVideo) {
        player.stopVideo();
    }
}


const menuOpen = document.getElementById('resMenu')
const closeMenu = document.getElementById('closeMenu')
const menu = document.getElementById('openMenu')

menuOpen.addEventListener("click", function() {
    menu.style.display = 'block'
    closeMenu.style.display = 'block'
    menuOpen.style.display = 'none'
})

closeMenu.addEventListener("click", function() {
    menu.style.display = 'none'
    closeMenu.style.display = 'none'
    menuOpen.style.display = 'block'
})