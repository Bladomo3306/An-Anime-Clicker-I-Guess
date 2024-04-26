function updateBlossomCount() {
    const blossomsPerSecond = parseInt(localStorage.getItem('BlossomPerSecond'));
    const currentBlossomCount = parseInt(localStorage.getItem('BlossomCount'));
    const newBlossomCount = currentBlossomCount + blossomsPerSecond;
    localStorage.setItem('BlossomCount', newBlossomCount.toString());
    updateBlossomsLabel();
}

setInterval(updateBlossomCount, 1000);

function updateBlossomsLabel() {
    const blossomLabel = document.getElementById("BlossomAmt");
    if (blossomLabel) {
        blossomLabel.innerText = localStorage.getItem('BlossomCount');
    }
}