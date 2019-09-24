function familyTrip(input) {
    let budget = Number(input.shift());
    let nights = Number(input.shift());
    let pricePerNight = Number(input.shift());
    let addExpPercentige = Number(input.shift());

    if (nights > 7) {
        pricePerNight *= 0.95;
    }

    let priceOfNights = nights * pricePerNight;
    let addExp = budget * addExpPercentige / 100;
    let sum = priceOfNights + addExp;
    let diff = Math.abs(budget - sum);

    if (budget >= sum) {
        console.log(`Ivanovi will be left with ${diff.toFixed(2)} leva after vacation.`);
    } else {
        console.log(`${diff.toFixed(2)} leva needed.`);
    }
}
familyTrip([800.50, 8, 100, 2]);