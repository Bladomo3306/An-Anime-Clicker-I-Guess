function openShop() {
    console.log("Opening the shop...");
    window.location.href = "../Shop/Shop.html";
    setMusic();
    
}
function reopenClicker() {
    window.location.href = "../Game/Clicker.html";
}
function openAchievements() {
    window.location.href = "../Achievements/Achievements.html";
    setMusic();
}
function setMusic() {
    var music = document.getElementById("backgroundMusic");
    localStorage.setItem("MusicTime", music.currentTime);
}

function openSettings() {
    console.log("Opening settings...");
    var myModal = new bootstrap.Modal(document.getElementById('volumeModal'));
    myModal.show();
  }