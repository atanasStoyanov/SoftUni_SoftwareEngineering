function someth(arr) {
    let days = +arr.shift();
    let budget = +arr.shift();
    let groupPpl = +arr.shift();
    let priceFuelKm = +arr.shift();
    let foodExpencesPerPerson = +arr.shift();
    let hotelPersonPerDay = +arr.shift();
    let allFood = groupPpl * foodExpencesPerPerson * days;
    let allHotel = groupPpl * hotelPersonPerDay * days;

    if (groupPpl > 10) {
        allHotel *= 0.75;
    }
    let all = allFood + allHotel;
    
    for (let i = 1; i <= days; i++) {
        let kmTravelled = +arr[i - 1];
        let fuel = kmTravelled * priceFuelKm;
        all += fuel;
        if (i % 3 === 0 || i % 5 === 0) {
            all += all * 0.4;
        }

        if (i % 7 === 0) {
            all -= all / groupPpl;
        }

        if (all > budget) {
            console.log(`Not enough money to continue the trip. You need ${(all - budget).toFixed(2)}$ more.`);
            break;
        }
    }

    if (all <= budget) {
        console.log(`You have reached the destination. You have ${(budget - all).toFixed(2)}$ budget left.`);
    }
}

someth([
    7,
    12000,
    5,
    1.5,
    10,
    20,
    512,
    318,
    202,
    154,
    222,
    108,
    123
])