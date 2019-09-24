function sushiTime(input) {
    let sushiType = input.shift();
    let restaurant = input.shift();
    let portions = Number(input.shift());
    let order = input.shift();

    let price = 0;
    let totalPrice = 0;
    let validRestaurant = true;

    if (sushiType === 'sashimi') {
        
        if (restaurant === 'Sushi Zone') {
            price = 4.99;
        } else if (restaurant === 'Sushi Time') {
            price = 5.49;
        } else if (restaurant === 'Sushi Bar') {
            price = 5.25;
        } else if (restaurant === 'Asian Pub') {
            price = 4.50;
        } else {
            validRestaurant = false;
        }

    } else if (sushiType === 'maki') {
        
        if (restaurant === 'Sushi Zone') {
            price = 5.29;
        } else if (restaurant === 'Sushi Time') {
            price = 4.69;
        } else if (restaurant === 'Sushi Bar') {
            price = 5.55;
        } else if (restaurant === 'Asian Pub') {
            price = 4.80;
        } else {
            validRestaurant = false;
        }

    } else if (sushiType === 'uramaki') {

        if (restaurant === 'Sushi Zone') {
            price = 5.99;
        } else if (restaurant === 'Sushi Time') {
            price = 4.49;
        } else if (restaurant === 'Sushi Bar') {
            price = 6.25;
        } else if (restaurant === 'Asian Pub') {
            price = 5.50;
        } else {
            validRestaurant = false;
        }

    } else {
      
        if (restaurant === 'Sushi Zone') {
            price = 4.29;
        } else if (restaurant === 'Sushi Time') {
            price = 5.19;
        } else if (restaurant === 'Sushi Bar') {
            price = 4.75;
        } else if (restaurant === 'Asian Pub') {
            price = 5.50;
        } else {
            validRestaurant = false;
        }
    }

    totalPrice = price * portions;

    if (order === 'Y') {
        totalPrice *= 1.20;
    }

    if (validRestaurant) {
        console.log(`Total price: ${Math.ceil(totalPrice)} lv.`);
    } else {
        console.log(`${restaurant} is invalid restaurant!`);
    }
}

sushiTime(['sashimi', 'Sushi Time', 3, 'N']);