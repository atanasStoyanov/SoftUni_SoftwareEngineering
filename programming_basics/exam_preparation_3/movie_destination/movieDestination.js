function movieDestination (input) {
    let budget = Number(input.shift());
    let destination = input.shift();
    let season = input.shift();
    let daysNumber = Number(input.shift());
    let price = 0;

    if (season === 'Winter') {

        if (destination === 'Dubai') {
            price = daysNumber * 45000;
            price *= 0.70;
        } else if (destination === 'Sofia') {
            price = daysNumber * 17000;
            price *= 1.25;
        } else {
            price = daysNumber * 24000;
        }

    } else {
        
        if (destination === 'Dubai') {
            price = daysNumber * 40000;
            price *= 0.70;
        } else if (destination === 'Sofia') {
            price = daysNumber * 12500;
            price *= 1.25;
        } else {
            price = daysNumber * 20250;
        }

    }

    let diff = Math.abs(budget - price);
    
    if (budget >= price) {
        console.log(`The budget for the movie is enough! We have ${diff.toFixed(2)} leva left!`);
    } else {
        console.log(`The director needs ${diff.toFixed(2)} leva more!`);
    }
}
movieDestination([200000, 'London', 'Summer', 7]);