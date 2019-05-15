function toys (input){
    const puzzle = 2.60;
    const doll = 3;
    const bear = 4.10;
    const minion = 8.20;
    const truck = 2;

    let price = Number(input[0]);
    let puzzlesQuantity = Number(input[1]);
    let dollsQuantity = Number(input[2]);
    let bearQuantity = Number(input[3]);
    let minionQuantity = Number(input[4]);
    let truckQuantity = Number(input[5]);

    let sum = puzzle * puzzlesQuantity + doll * dollsQuantity + bear * bearQuantity + minion * minionQuantity + truck * truckQuantity;
    let toys = puzzlesQuantity + dollsQuantity + bearQuantity + minionQuantity + truckQuantity;

    if (toys >= 50){
        sum = sum - sum * 0.25
    }

    sum = sum - sum * 0.1;

    if (sum >=price){
        console.log(`Yes! ${(sum - price).toFixed(2)} lv left.`)
    } else{
        console.log(`Not enough money! ${(price - sum).toFixed(2)} lv needed.`)
    }
}

toys(['40.8', '20', '25', '30','50','10'])