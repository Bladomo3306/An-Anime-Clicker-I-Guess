document.addEventListener("DOMContentLoaded", function() {
    
    var introText = document.getElementById("introText");
     introText.style.display = "block";
     setTimeout(function() {
        introText.style.opacity = 1;
    }, 100);

    setTimeout(function() {
        introText.style.opacity = 0;
    }, 2500);

    setTimeout(function() {
        intro.style.display = "none";
        StartScreen.style.display = "block"
    }, 5000);
});

function startGame() {
    // Redirect to the game page or start the game logic
    console.log("Starting the game...");
    var StartScreen = document.getElementById("StartScreen");
     introText.style.display = "block";

      StartScreen.style.opacity = 0;
    
    setTimeout(function() {
        window.location.href = "../Game/Clicker.html?Open";
    }, 2500);

    
  }

  function openSettings() {
    // Redirect to the settings page or display settings overlay
    console.log("Opening settings...");
    var myModal = new bootstrap.Modal(document.getElementById('volumeModal'));
    myModal.show();
  }

  function showCredits() {
    // Display the credits overlay or navigate to the credits page
    console.log("Showing credits...");
    var myModal = new bootstrap.Modal(document.getElementById('creditsModal'));
    myModal.show();
  }

  function exitGame() {
    // Close the game window or handle exiting the game
    console.log("Exiting game...");
    // For demonstration purposes, let's just close the current window
    window.close();
  }