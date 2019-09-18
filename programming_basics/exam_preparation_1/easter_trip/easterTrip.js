function easterTrip (input) {
    let destination = input[0];
    let date = input[1];
    let nightsNumber = Number(input[2]);

    let price = 0;

    if (destination === 'France') {

        if (date === '21-23') {
            price = nightsNumber * 30;
        } else if (date === '24-27') {
            price = nightsNumber * 35;
        } else {
            price = nightsNumber * 40;
        }

    } else if (destination === 'Italy') {
        
        if (date === '21-23') {
            price = nightsNumber * 28;
        } else if (date === '24-27') {
            price = nightsNumber * 32;
        } else {
            price = nightsNumber * 39;
        }

    } else {

        if (date === '21-23') {
            price = nightsNumber * 32;
        } else if (date === '24-27') {
            price = nightsNumber * 37;
        } else {
            price = nightsNumber * 43;
        }
    }

    console.log(`Easter trip to ${destination} : ${price.toFixed(2)} leva.`);
}

easterTrip(['Italy','21-23',7]);