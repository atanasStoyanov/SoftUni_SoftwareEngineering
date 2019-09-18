function easterParty (input) {
    let guestsNumber = Number(input[0]);
    let pricePerOneGuest = Number(input[1]);
    let budget = Number(input[2]);

    if (guestsNumber >= 10 && guestsNumber <= 15) {
        pricePerOneGuest = pricePerOneGuest * 0.85;
    } else if (guestsNumber > 15 && guestsNumber <= 20) {
        pricePerOneGuest = pricePerOneGuest * 0.80;
    } else if (guestsNumber > 20) {
        pricePerOneGuest = pricePerOneGuest * 0.75;
    }

    let cakePrice = budget * 0.10;
    let sumPrice = cakePrice + guestsNumber * pricePerOneGuest;
    let diff = Math.abs(sumPrice - budget);

    if (sumPrice <= budget) {
        console.log(`It is party time! ${diff.toFixed(2)} leva left.`);
    } else {
        console.log(`No party! ${diff.toFixed(2)} leva needed.`);
    }
}

easterParty([8,25,340]);