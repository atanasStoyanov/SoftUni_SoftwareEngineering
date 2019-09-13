function journey (input) {
    let budget = Number(input[0]);
    let season = input[1];
    let price = 0;
    let place = null;
    let vacationType = null;

    if (budget <= 100) {
        place = 'Bulgaria';
        
        if (season == 'summer') {
            vacationType = 'Camp';
            price = budget * 0.30;
        } else {
            vacationType = 'Hotel';
            price = budget * 0.70;
        }

    } else if (budget <= 1000) {
        place = 'Balkans';
       
        if (season == 'summer') {
            vacationType = 'Camp';
            price = budget * 0.40;
        } else {
            vacationType = 'Hotel';
            price = budget * 0.80;
        }

    } else {
        place = 'Europe';
        vacationType = 'Hotel';
        price = budget * 0.90;
    }

    console.log(`Somewhere in ${place}`);
    console.log(`${vacationType} - ${price.toFixed(2)}`);
}

journey(['1500', 'summer'])