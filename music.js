function updateVolume(value) {
    var audio = document.getElementById("backgroundMusic");
    var newVolume = value / 100;
    audio.volume = newVolume;
    localStorage.setItem("audioVolume", newVolume); // Save the new volume to localStorage
}



document.addEventListener('click', function(event) {
    var audio = document.getElementById("backgroundMusic")
    var volumeSlider = document.getElementById("volumeSlider");
    var savedVolume = localStorage.getItem("audioVolume") || 0.1;
    audio.volume = savedVolume;
    volumeSlider.value = savedVolume * 100;
    if (audio.paused) {
        curTime = localStorage.getItem("MusicTime");
        audio.currentTime = curTime;
        audio.play();
    }
});
