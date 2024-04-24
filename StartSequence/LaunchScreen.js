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
    // For demonstration purposes, let's just navigate to a new page
    window.location.href = "game.html";
  }

  function openSettings() {
    // Redirect to the settings page or display settings overlay
    console.log("Opening settings...");
    console.log("Ur stupid");
    console.log("New lione")
    window.location.href = "settings.html";
  }

  function showCredits() {
    // Display the credits overlay or navigate to the credits page
    console.log("Showing credits...");
    // For demonstration purposes, let's just navigate to a new page
    window.location.href = "credits.html";
  }

  function exitGame() {
    // Close the game window or handle exiting the game
    console.log("Exiting game...");
    // For demonstration purposes, let's just close the current window
    window.close();
  }
