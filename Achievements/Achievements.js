function updateAchievements() {
    var achievements = [
        // Will eventually add functionality
    ];

    achievements.forEach(function(achievement) {
        var achievementElement = document.createElement('div');
        achievementElement.className = 'shop-item';
        if (achievement.locked) {
            achievementElement.classList.add('achievement-locked');
        }
        achievementElement.innerHTML = `
            <div class="item-info">
                <h4 class="item-name">${achievement.title} ${achievement.locked ? '<span class="text-muted">(Locked)</span>' : ''}</h4>
                <p class="item-description">${achievement.description}</p>
            </div>
        `;
        document.getElementById('shop-container').appendChild(achievementElement);
    });
}

window.onload = function() {
    updateAchievements();
};

