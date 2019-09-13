function movie (input){
    let budget = Number(input[0]);
    let static = Number(input[1]);
    let clothing = Number(input[2]);

    let priceDecor = budget * 0.10;
    let priceClothes = static * clothing;

    if (static > 150){
        priceClothes = priceClothes - priceClothes * 0.10;
    }
    
    let sumMovie = priceDecor + priceClothes;

    if (sumMovie > budget){
        console.log(`Not enough money!`);
        console.log(`Wingard needs ${(sumMovie - budget).toFixed(2)} leva more.`);
    } else {
        console.log('Action!');
        console.log(`Wingard starts filming with ${(budget - sumMovie).toFixed(2)} leva left.`);
    }
}
movie(['20000','120','55.5'])