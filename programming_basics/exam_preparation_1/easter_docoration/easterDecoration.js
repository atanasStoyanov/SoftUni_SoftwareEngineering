function easterDecoration (input) {
    let customers = Number(input.shift());
    let billSum = 0;

    for (let i = 1; i <= customers; i++) {
        let purchaseSum = 0;
        let productsCounter = 0;

        while (true) {
            let product = input.shift();

            if (product === 'Finish') {
                break;
            } else if (product === 'basket') {
                purchaseSum += 1.50;
            } else if (product === 'wreath') {
                purchaseSum += 3.80;
            } else {
                purchaseSum += 7;
            }

            productsCounter ++;
        }

        if (productsCounter % 2 === 0) {
            purchaseSum = purchaseSum * 0.80;
        }

        billSum += purchaseSum;
        console.log(`You purchased ${productsCounter} items for ${purchaseSum.toFixed(2)} leva.`);
    }

    let avarageBill = billSum / customers;
    console.log(`Average bill per client is: ${avarageBill.toFixed(2)} leva.`);
}

easterDecoration([2,'basket','wreath','chocolate bunny','Finish','wreath','chocolate bunny','Finish']);