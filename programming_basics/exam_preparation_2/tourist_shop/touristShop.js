function touristShop (input) {
    let budget = Number(input.shift());
    let shoppingSum = 0;
    let command = input.shift();
    let productsCounter = 1;

    while (command !== 'Stop') {
        let productPrice = Number(input.shift());

        if (productsCounter % 3 === 0) {
            productPrice = productPrice / 2;
        }
        
        shoppingSum += productPrice;
        
        if (shoppingSum > budget) {
            console.log("You don't have enough money!");
            console.log(`You need ${(shoppingSum - budget).toFixed(2)} leva!`);
            break;
        } else {
            productsCounter++;
        }

        command = input.shift();
    }

    if (command === 'Stop') {
        console.log(`You bought ${productsCounter - 1} products for ${shoppingSum.toFixed(2)} leva.`);
    }
}
touristShop([54, 'Thermal underwear', 24, 'Sunscreen', 45]);