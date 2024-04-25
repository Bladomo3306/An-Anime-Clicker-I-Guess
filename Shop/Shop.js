function openUpgrades() {
    var upgradesHTML = `
        <div class="row">
            <div class="col-md-6 mt-2">
                <div class="shop-item">
                    <div class="item-info">
                        <h4 class="item-name">Ramen Noodles</h4>
                        <p class="item-description">Mmmm tasty. Increases your blossoms per click.</p>
                        <span class="item-price">Cost: 50 Blossoms</span>
                    </div>
                    <button class="shop-button">Buy</button>
                </div>
            </div>
            <div class="col-md-6 mt-2">
                <div class="shop-item">
                    <div class="item-info">
                        <h4 class="item-name">Rem</h4>
                        <p class="item-description">Wait... who's that again? Boosts morale! 1 blossom a second.</p>
                        <span class="item-price">Cost: 100 Blossoms</span>
                    </div>
                    <button class="shop-button">Buy</button>
                </div>
            </div>
            <div class="col-md-6 mt-2">
                <div class="shop-item">
                    <div class="item-info">
                        <h4 class="item-name">Shadow Clone Jutsu</h4>
                        <p class="item-description">Create shadow clones of yourself! 5 blossoms a second.</p>
                        <span class="item-price">Cost: 500 Blossoms</span>
                    </div>
                    <button class="shop-button">Buy</button>
                </div>
            </div>
            <div class="col-md-6 mt-2">
                <div class="shop-item">
                    <div class="item-info">
                        <h4 class="item-name">Astolfo Body Pillow</h4>
                        <p class="item-description">Don't judge me... 10 blossoms a second.</p>
                        <span class="item-price">Cost: 1500 Blossoms</span>
                    </div>
                    <button class="shop-button">Buy</button>
                </div>
            </div>
            <div class="col-md-6 mt-2">
                <div class="shop-item">
                    <div class="item-info">
                        <h4 class="item-name">Cherry Blossom Tree</h4>
                        <p class="item-description">Money doesn't grow on trees... maybe. 20 blossoms a second.</p>
                        <span class="item-price">Cost: 5000 Blossoms</span>
                    </div>
                    <button class="shop-button">Buy</button>
                </div>
            </div>
            <div class="col-md-6 mt-2">
                <div class="shop-item">
                    <div class="item-info">
                        <h4 class="item-name">Mappa</h4>
                        <p class="item-description">Don't worry they're not getting overworked :3. 50 blossoms a second.</p>
                        <span class="item-price">Cost: 20000 Blossoms</span>
                    </div>
                    <button class="shop-button">Buy</button>
                </div>
            </div>
            <div class="col-md-6 mt-2">
                <div class="shop-item">
                    <div class="item-info">
                        <h4 class="item-name">Haki</h4>
                        <p class="item-description">Boosts your click power! 2x blossoms per click.</p>
                        <span class="item-price">Cost: 100000 Blossoms</span>
                    </div>
                    <button class="shop-button">Buy</button>
                </div>
            </div>
            <div class="col-md-6 mt-2">
                <div class="shop-item">
                    <div class="item-info">
                        <h4 class="item-name">Geass</h4>
                        <p class="item-description">Take control of the world! 150 blossoms a second.</p>
                        <span class="item-price">Cost: 500000 Blossoms</span>
                    </div>
                    <button class="shop-button">Buy</button>
                </div>
            </div>
            <div class="col-md-6 mt-2">
                <div class="shop-item">
                    <div class="item-info">
                        <h4 class="item-name">Founding Titan</h4>
                        <p class="item-description">Control all the titans! 300 blossoms a second.</p>
                        <span class="item-price">Cost: 1500000 Blossoms</span>
                    </div>
                    <button class="shop-button">Buy</button>
                </div>
            </div>
            <div class="col-md-6 mt-2">
                <div class="shop-item">
                    <div class="item-info">
                        <h4 class="item-name">All for One</h4>
                        <p class="item-description">Take other people's powers. 600 blossoms a second.</p>
                        <span class="item-price">Cost: 5000000 Blossoms</span>
                    </div>
                    <button class="shop-button">Buy</button>
                </div>
            </div>
            <div class="col-md-6 mt-2">
                <div class="shop-item">
                    <div class="item-info">
                        <h4 class="item-name">STEEEAAAAAAALLLLL!!!</h4>
                        <p class="item-description">Get extra... lucky. 1200 blossoms a second.</p>
                        <span class="item-price">Cost: 10000000</span>
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