function solve(startingYield) {
    const spiceForWorkers = 26
    let daysCounter = 0;
    let minedSpice = 0;

    for (let i = startingYield; i >= 100; i -= 10) {
        let minedSpicePerDay = i;
        
        if (minedSpicePerDay >= spiceForWorkers) {
            minedSpicePerDay -= spiceForWorkers
        } else {
            minedSpicePerDay = 0;
        }
        minedSpice += minedSpicePerDay;
        daysCounter++;
    }

    if (minedSpice >= spiceForWorkers) {
        minedSpice -= spiceForWorkers;
    } else {
        minedSpice = 0;
    }

    console.log(daysCounter);
    console.log(minedSpice);
}

solve(450)