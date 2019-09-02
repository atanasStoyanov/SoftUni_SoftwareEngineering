function bitcounMining (input) {
let money = 0;
let bitcoinPrice = 11949.16;
let bitconsCounter = 0;
let daysCounter = 0;
let dayOfTheFirstPurchase = 0;
    for (let day = 0; day < input.length; day++) {
        daysCounter++;
        let minedGold = Number(input[day])
        if (daysCounter % 3 === 0 && daysCounter !== 0){
            minedGold *= 0.70;
        }
        money += minedGold * 67.51;
        if (money >= bitcoinPrice && bitconsCounter === 0){
            dayOfTheFirstPurchase = daysCounter;
        }
        while (money >= bitcoinPrice){
            money -= bitcoinPrice;
            bitconsCounter++
        }
    }
    console.log(`Bought bitcoins: ${bitconsCounter}`);
    if (bitconsCounter !== 0){
        console.log(`Day of the first purchased bitcoin: ${dayOfTheFirstPurchase}`);
    }
    console.log(`Left money: ${money.toFixed(2)} lv.`);
}

//bitcounMining([100,200,300])
bitcounMining([3124.15,504.212,2511.124])