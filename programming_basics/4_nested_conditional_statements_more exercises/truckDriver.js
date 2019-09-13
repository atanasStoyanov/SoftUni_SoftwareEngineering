function truckDriver (input) {
    let season = input[0];
    let kmPerMonth = Number(input[1]);
    let income = 0;

    if (season == 'Spring' || season == 'Autumn') {
       
        if (kmPerMonth <= 5000) {
            income = 4 * kmPerMonth * 0.75;
        } else if (kmPerMonth <= 10000) {
            income = 4 * kmPerMonth * 0.95;
        } else if (kmPerMonth <= 20000) {
            income = 4 * kmPerMonth * 1.45;
        }

    } else if (season == 'Summer') {

        if (kmPerMonth <= 5000) {
            income = 4 * kmPerMonth * 0.90;
        } else if (kmPerMonth <= 10000) {
            income = 4 * kmPerMonth * 1.10;
        } else if (kmPerMonth <= 20000) {
            income = 4 * kmPerMonth * 1.45;
        }

    } else {
        
        if (kmPerMonth <= 5000) {
            income = 4 * kmPerMonth * 1.05;
        } else if (kmPerMonth <= 10000) {
            income = 4 * kmPerMonth * 1.25;
        } else if (kmPerMonth <= 20000) {
            income = 4 * kmPerMonth * 1.45;
        }
    }

    let salary = income - income * 0.10;

    console.log(salary.toFixed(2));
}

truckDriver(['Spring', 1600])