function solve(arr) {
    let budget = Number(arr.shift());
    let pricePerOneKgFlour = Number(arr.shift());
    let pricePerPackEggs = pricePerOneKgFlour * 0.75;
    let priceOneLiterMilk = pricePerOneKgFlour * 1.25;
    let neededMilkPrice = priceOneLiterMilk / 4;
    let priceOfOneCozunac = pricePerOneKgFlour + pricePerPackEggs + neededMilkPrice;
    let coloredEggs = 0;
    let cozonacs = 0;

    while (budget - priceOfOneCozunac > 0) {
        budget -= priceOfOneCozunac;

        cozonacs++; 
        coloredEggs += 3;

        if (cozonacs % 3 === 0) {
            coloredEggs -= cozonacs - 2;
        }
    }


    console.log(`You made ${cozonacs} cozonacs! Now you have ${coloredEggs} eggs and ${budget.toFixed(2)}BGN left.`);
    
}

solve([20.50, 1.25]);