function easterLunch (input) {
    let kozunakNumber = Number(input[0]);
    let packsOfEggs = Number(input[1]);
    let cookiesKg = Number(input[2]);

    let kozunaciPrice = kozunakNumber * 3.20;
    let eggsPrice = packsOfEggs * 4.35;
    let cookiesPrice = cookiesKg * 5.40;
    let eggsPaintPrice = packsOfEggs * 12 * 0.15;

    let sum = kozunaciPrice + eggsPrice + cookiesPrice + eggsPaintPrice;

    console.log(sum.toFixed(2));
}

easterLunch([3,2,3]);