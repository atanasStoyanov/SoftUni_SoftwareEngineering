function vetPArking (input) {
    let days = Number(input[0]);
    let hoursPerDay = Number(input[1]);
    let total = 0;

    for (let d = 1; d <= days; d++) {
        let tax = 0;

        for (let h = 1; h <= hoursPerDay; h++) {

            if (d % 2 == 0 && h % 2 != 0) {
                tax += 2.50;
            } else if (d % 2 != 0 && h % 2 == 0) {
                tax += 1.25;
            } else {
                tax += 1;
            }  
        }

        total += tax;
        console.log(`Day: ${d} - ${tax.toFixed(2)} leva`) ;
    }

    console.log(`Total: ${total.toFixed(2)} leva`);
}

vetPArking([5,2]);