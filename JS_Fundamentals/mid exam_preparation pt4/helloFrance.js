function solve(arr) {
    let collection = arr.shift().split('|');
    let budget = Number(arr.shift());
    let profit = 0;
    let newCollection = [];

    for (let i = 0; i < collection.length; i++) {
        let [item, price] = collection[i].split('->');
        price = Number(price);
        let newPrice = 0
        
        if (item === 'Clothes' && price <= 50) {
            
            if (budget - price >= 0) {
                budget -= price;
                newPrice = price * 1.40
                newCollection.push(newPrice);
                profit += newPrice - price;
            }

        } else if (item === 'Shoes' && price <= 35) {

            if (budget - price >= 0) {
                budget -= price;
                newPrice = price * 1.40
                newCollection.push(newPrice);
                profit += newPrice - price;
            }
        } else if (item === 'Accessories' && price <= 20.50) {
            
            if (budget - price >= 0) {
                budget -= price;
                newPrice = price * 1.40
                newCollection.push(newPrice);
                profit += newPrice - price;
            }
        }
    }

    console.log(newCollection.map(a => a.toFixed(2)).join(' '));
    console.log(`Profit: ${profit.toFixed(2)}`);
    
    let newBudget = budget + newCollection.reduce((a, b) => a + b);

    if (newBudget >= 150) {
        console.log('Hello, France!');
    } else {
        console.log('Time to go.');
        
    }
    
}

solve(['Shoes->41.20|Clothes->20.30|Accessories->40|Shoes->15.60|Shoes->33.30|Clothes->48.60',
    90
    ]);