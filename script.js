document.getElementById('playButton').addEventListener('click', function() {
    var audio = document.getElementById('audioPlayer');
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
});
