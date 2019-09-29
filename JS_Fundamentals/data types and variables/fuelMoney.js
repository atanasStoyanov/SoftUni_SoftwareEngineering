function solve(distance, passengers, fuelPrice) {
    let increaseByPassengers = passengers * 0.1;
    let neededFuel = (distance / 100) * 7 + increaseByPassengers;
    let neededMoney= neededFuel * fuelPrice;

    console.log(`Needed money for that trip is ${neededMoney}lv.`);
    
}

solve(260, 9, 2.49);