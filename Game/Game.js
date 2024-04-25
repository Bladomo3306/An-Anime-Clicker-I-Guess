
document.addEventListener("DOMContentLoaded", function() {
    fadeInBackgrounds()
    
});
document.addEventListener('click', function(event) {
    var audio = document.getElementById("backgroundMusic")
    audio.volume = 0.1;
    if (audio.paused) {
        curTime = localStorage.getItem("MusicTime");
        audio.currentTime = curTime;
        audio.play();
    }
});

function fadeInBackgrounds() {
    var currentUrl = window.location.href;
    var body = document.getElementById("body");
    UrlLast4 = currentUrl.substring(currentUrl.length - 4);
    if (UrlLast4 == "Open"){
        body.style.transition = "2s";
        body.style.display = "block";
     setTimeout(function() {
        body.style.opacity = 1;
    }, 250);
    } else {
        body.style.transition = "0s";
        body.style.display = "block";
        body.style.opacity = 1;
    }

    var background = document.getElementById("background");
    UrlLast4 = currentUrl.substring(currentUrl.length - 4);
    if (UrlLast4 == "Open"){
        background.style.transition = "2s";
        background.style.display = "block";
     setTimeout(function() {
        background.style.opacity = 1;
    }, 250);
    } else {
        background.style.transition = "0s";
        background.style.display = "block";
        background.style.opacity = 1;
    }
}