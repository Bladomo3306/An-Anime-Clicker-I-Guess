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
    initializePurchasedItems();
};

document.addEventListener("DOMContentLoaded", function() {
    setupMutationObserver();
    document.body.addEventListener('click', function(event) {
        if (event.target && event.target.classList.contains('shop-button')) {
            const button = event.target;
            const itemNameElement = button.parentElement.querySelector('.item-name');
            const itemId = itemNameElement ? itemNameElement.innerText : 'Unknown Item';
            const itemCostElement = button.parentElement.querySelector('.item-price');
            let itemCost = parseInt(itemCostElement.innerText.replace(/[^0-9]/g, ''));
            const currentBlossoms = parseInt(localStorage.getItem('BlossomCount'));

            if (currentBlossoms >= itemCost) {
                localStorage.setItem('BlossomCount', currentBlossoms - itemCost);
                updatePurchasedItems(itemId);
                updateItemCost(itemId, itemCostElement);
                alert('Purchase Successful!');
            } else {
                alert('Not enough Blossoms!');
            }
        }
    });
});

function setupMutationObserver() {
    const observer = new MutationObserver((mutations) => {
        for (let mutation of mutations) {
            for (let node of mutation.addedNodes) {
                if (node.nodeType === 1 && node.querySelector('.shop-item')) {
                    initializeItemCosts();
                    console.log('Shop items detected and initializeItemCosts called.');
                    break;
                }
            }
        }
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
}

function initializeItemCosts() {
    const items = document.querySelectorAll('.shop-item');
    console.log("Number of items found:", items.length);

    items.forEach(item => {
        const itemName = item.querySelector('.item-name').innerText;
        const itemCostElement = item.querySelector('.item-price');
        let storedCost = localStorage.getItem(itemName);

        if (storedCost) {
            let parsedCost = parseInt(storedCost);
            if (!isNaN(parsedCost)) {
                itemCostElement.innerText = `Cost: ${parsedCost} Blossoms`;
            } else {
                console.error(`Stored cost for ${itemName} is not a valid number:`, storedCost);
            }
        } else {
            let initialCost = parseInt(itemCostElement.innerText.replace(/[^0-9]/g, ''));
            localStorage.setItem(itemName, initialCost);
        }
    });
}

function updateItemCost(itemId, itemCostElement) {
    let currentCost = parseInt(localStorage.getItem(itemId));
    console.log(`Current cost for ${itemId}:`, currentCost);
    if (!isNaN(currentCost)) {
        let newCost = Math.floor(currentCost * 1.5);
        localStorage.setItem(itemId, newCost);
        itemCostElement.innerText = `Cost: ${newCost} Blossoms`;
    } else {
        console.error('Invalid cost retrieved from localStorage:', currentCost);
    }
}

function initializePurchasedItems() {
    if (!localStorage.getItem('purchasedItems')) {
        localStorage.setItem('purchasedItems', JSON.stringify({}));
    }
}

function updatePurchasedItems(itemId) {
    const purchasedItems = JSON.parse(localStorage.getItem('purchasedItems') || "{}");
    if (purchasedItems[itemId]) {
        purchasedItems[itemId] += 1;
    } else {
        purchasedItems[itemId] = 1;
    }
    localStorage.setItem('purchasedItems', JSON.stringify(purchasedItems));

    if (itemId === "Ramen Noodles") {
        let currentBlossomPerClick = parseInt(localStorage.getItem('BlossomPerClick'));
        localStorage.setItem('BlossomPerClick', currentBlossomPerClick + purchasedItems[itemId]);
    }
}