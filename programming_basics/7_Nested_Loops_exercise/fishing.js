function fishing (input) {
    let quota = Number(input.shift());
    let catchedFishes = 1;
    let profit = 0;

    while (catchedFishes <= quota) {
        let currentFish = input.shift();
        if (currentFish == 'Stop'){
            break;
        }
        let weight = Number(input.shift());
        let fishPrice = 0;
        let netFishPrice = 0;
        for (let letter = 0; letter < currentFish.length; letter++) {
            fishPrice += currentFish.charCodeAt(letter);
        }
        netFishPrice = fishPrice / weight;
        if (catchedFishes % 3 == 0){
            profit += netFishPrice;
        }else{
            profit -= netFishPrice;
        }
        catchedFishes++;
    }
    if(catchedFishes > quota){
        console.log('Lyubo fulfilled the quota!');
    }
    if(profit > 0){
        console.log(`Lyubo's profit from ${catchedFishes - 1} fishes is ${profit.toFixed(2)} leva.`);
    }else{
        let lostMoney = Math.abs(profit);
        console.log(`Lyubo lost ${lostMoney.toFixed(2)} leva today.`);
    }
}

fishing([10,'Pike', 15, 'GrassCarp', 40, 'Common Rudd', 7, 'Perch', 20, 'Stop'])