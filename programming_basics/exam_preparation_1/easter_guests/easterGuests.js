function easterGuests (input) {
    let guestsNumber = Number(input[0]);
    let budget = Number(input[1]);

    let easterBreadNumber = Math.ceil(guestsNumber / 3);
    let eggsNumber = guestsNumber * 2;
    let easterBreadPrice = easterBreadNumber * 4;
    let eggsPrice = eggsNumber * 0.45;
    let sum = easterBreadPrice + eggsPrice;
    let diff = Math.abs(sum - budget);

    if (budget >= sum) {
        console.log(`Lyubo bought ${easterBreadNumber} Easter bread and ${eggsNumber} eggs.`);
        console.log(`He has ${diff.toFixed(2)} lv. left.`);
    } else {
        console.log(`Lyubo doesn't have enough money.`);
        console.log(`He needs ${diff.toFixed(2)} lv. more.`);
    }
}

easterGuests([9,12]);