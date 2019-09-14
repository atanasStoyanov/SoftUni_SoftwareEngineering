function parkingHappyCat(input) {
    let days = Number(input.shift());
    let hoursPerDay = Number(input.shift());
    let parkingPriceSum = 0;
    
    for (let i = 1; i <= days; i++) {
        let pricePerDay = 0; 

        for (let j = 1; j <= hoursPerDay; j++) {

            if (i % 2 == 0 && j % 2 != 0){
                pricePerDay += 2.50;
                parkingPriceSum += 2.50;
            } else if (i % 2 != 0 && j % 2 == 0){
                pricePerDay += 1.25;
                parkingPriceSum += 1.25;
            } else {
                pricePerDay ++;
                parkingPriceSum ++;
            }
        }

        console.log(`Day: ${i} - ${pricePerDay.toFixed(2)} leva`);
    }
    
    console.log(`Total: ${parkingPriceSum.toFixed(2)} leva`);
}

parkingHappyCat([5,2])