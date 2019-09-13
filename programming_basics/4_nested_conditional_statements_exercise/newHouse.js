function newHouse (input) {
    let type = input[0];
    let quantity = Number(input[1]);
    let budget = Number(input[2]);
    let sumPrice = 0;

    if (type == 'Roses') {
        sumPrice = quantity * 5;
        
        if(quantity > 80) {
            sumPrice = sumPrice * 0.9;
        }

    } else if (type == 'Dahlias'){
        sumPrice = quantity * 3.80;
       
        if (quantity > 90) {
            sumPrice = sumPrice * 0.85;
        }

    } else if (type == 'Tulips'){
        sumPrice = quantity * 2.80;
        
        if (quantity > 80) {
            sumPrice = sumPrice * 0.85;
        }
    }else if (type == 'Narcissus'){
        sumPrice = quantity * 3;
        
        if (quantity < 120) {
            sumPrice = sumPrice + sumPrice * 0.15;
        }
    } else {
        sumPrice = quantity * 2.50;
        
        if (quantity < 80) {
            sumPrice = sumPrice + sumPrice * 0.20;
        }
    }

    if (budget >= sumPrice) {
        console.log(`Hey, you have a great garden with ${quantity} ${type} and ${(budget - sumPrice).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money, you need ${(sumPrice - budget).toFixed(2)} leva more.`);
    }
}

newHouse(['Tulips', '88', '260'])