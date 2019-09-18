function safari (input) {
    let budget = Number(input[0]);
    let neededFuel = Number(input[1]);
    let day = input[2];

    let fuelPrice = neededFuel * 2.10;
    let safariPrice = fuelPrice + 100;
    let finalPrice = 0;

    if (day === 'Saturday') {
        finalPrice = safariPrice * 0.90;
    } else {
        finalPrice = safariPrice * 0.80;
    }

    let diff = Math.abs(budget - finalPrice);

    if (budget >= finalPrice) {
        console.log(`Safari time! Money left: ${diff.toFixed(2)} lv.`);
    } else {
        console.log(`Not enough money! Money needed: ${diff.toFixed(2)} lv.`);
    }
}

safari([120, 30, 'Saturday']);