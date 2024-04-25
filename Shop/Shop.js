function openUpgrades() {
    var upgradesHTML = `
        <div class="row">
            <div class="col-md-6 mt-2">
                <div class="shop-item">
                    <div class="item-info">
                        <h4 class="item-name">Extra Clicks</h4>
                        <p class="item-description">Increases your dabloons per click.</p>
                        <span class="item-price">Cost: 50 dabloons</span>
                    </div>
                    <button class="shop-button">Buy</button>
                </div>
            </div>
            <div class="col-md-6 mt-2">
                <div class="shop-item">
                    <div class="item-info">
                        <h4 class="item-name">+1 click a second</h4>
                        <p class="item-description">Adds 1 dabloon a second.</p>
                        <span class="item-price">Cost: 100 dabloons</span>
                    </div>
                    <button class="shop-button">Buy</button>
                </div>
            </div>
        </div>
    `;
    document.getElementById('shop-container').innerHTML = upgradesHTML;
    document.getElementById('upgrades-tab').classList.add('active');
    document.getElementById('crates-tab').classList.remove('active');
}

function openCrates() {
    var cratesHTML = `
        <div class="row">
            <div class="col-md-6 mt-2">
                <div class="shop-item">
                    <div class="item-info">
                        <h4 class="item-name">Mystery Crate</h4>
                        <p class="item-description">Contains a random item of value.</p>
                        <span class="item-price">Cost: 100 dabloons</span>
                    </div>
                    <button class="shop-button">Buy</button>
                </div>
            </div>
            <!-- Add more crate items here -->
        </div>
    `;
    document.getElementById('shop-container').innerHTML = cratesHTML;
    document.getElementById('upgrades-tab').classList.remove('active');
    document.getElementById('crates-tab').classList.add('active');
}

window.onload = function() {
    openUpgrades();
};