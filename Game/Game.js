
document.addEventListener("DOMContentLoaded", function() {
    fadeInBackgrounds();
    addShiroEL();
    addGojoEL();
    if (localStorage.getItem('BlossomCount') == null) {
        localStorage.setItem('BlossomCount', 0)
    }
    if (localStorage.getItem('BlossomPerClick') == null) {
        localStorage.setItem('BlossomPerClick', 1)
    }
    updateBlossomsLabel()
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

function addShiroEL() {
    
    document.getElementById('Shiro').addEventListener('click', function (e) {
        var ohayoAudio = new Audio('../Audio/Darling ohayo.mp3');
        var savedVolume = localStorage.getItem("audioVolume") || 0.1;
        ohayoAudio.volume = savedVolume;
        ohayoAudio.play()
    });
    
};

function addGojoEL() {
    blossoms = Number(localStorage.getItem('BlossomCount'));
    
    document.getElementById('clickerButton').addEventListener('click', function (e) {
        // var yowaimo = new Audio('../Audio/yowaimo.mp3')
        // var savedVolume = localStorage.getItem("audioVolume") || 0.1;
        // yowaimo.volume = savedVolume;
        // yowaimo.play()
        localStorage.setItem('BlossomCount', blossoms += Number(localStorage.getItem('BlossomPerClick')));
        updateBlossomsLabel()
    });
}

function updateBlossomsLabel() {
    document.getElementById("BlossomAmt").innerText = localStorage.getItem('BlossomCount');
}