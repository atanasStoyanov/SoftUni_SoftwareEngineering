function bikeRace(input) {
    let juniorBikers = Number(input[0]);
    let seniorBikers = Number(input[1]);
    let rout = input[2];
    let sumTax = 0;

    if (rout == 'trail') {
        sumTax = juniorBikers * 5.50 + seniorBikers * 7;
    } else if (rout == 'cross-country') {
        
        if (juniorBikers + seniorBikers >= 50) {
        sumTax = (juniorBikers * 8 + seniorBikers * 9.50) * 0.75;
        } else {
        sumTax = juniorBikers * 8 + seniorBikers * 9.50;
        }
        
    } else if (rout == 'downhill') {
        sumTax = juniorBikers * 12.25 + seniorBikers * 13.75;
    } else {
        sumTax = juniorBikers * 20 + seniorBikers * 21.50;
    }
    
    let donation = sumTax - sumTax * 0.05;

    console.log(donation.toFixed(2));
}

bikeRace([20,25,'cross-country'])