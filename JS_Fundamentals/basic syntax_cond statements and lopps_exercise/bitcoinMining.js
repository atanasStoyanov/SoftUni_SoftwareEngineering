function solve(arr) {
    let money = 0;
    const bitcoinPrice = 11949.16;
    const goldPrice = 67.51;
    let bitconsCounter = 0;
    let daysCounter = 0;
    let dayOfTheFirstPurchase = 0;

    for (let day = 0; day < arr.length; day++) {
        daysCounter++;
        let minedGold = +arr[day];

        if (daysCounter % 3 === 0 && daysCounter !== 0) {
            minedGold *= 0.70;
        }

        money += minedGold * goldPrice;

        if (money >= bitcoinPrice && bitconsCounter === 0) {
            dayOfTheFirstPurchase = daysCounter;
        }

        while (money >= bitcoinPrice) {
            money -= bitcoinPrice;
            bitconsCounter++;
        }
    }

    console.log(`Bought bitcoins: ${bitconsCounter}`);

    if (bitconsCounter !== 0) {
        console.log(`Day of the first purchased bitcoin: ${dayOfTheFirstPurchase}`);
    }

    console.log(`Left money: ${money.toFixed(2)} lv.`);
}

solve([3124.15, 504.212, 2511.124]);