function solve(arr) {
    let days = Number(arr.shift());
    let players = Number(arr.shift());
    let energy = Number(arr.shift());
    let waterPerDayForOnePerson = Number(arr.shift());
    let waterSupplay = players * waterPerDayForOnePerson * days;
    let foodPerDayForOnePerson = Number(arr.shift());
    let foodSupplay = players * foodPerDayForOnePerson * days;
    let readyForTheQuest = true;

    for (let i = 1; i <= days; i++) {
        let lostEnergy = Number(arr[i - 1]);
        energy -= lostEnergy;

        if (energy <= 0 ) {
            readyForTheQuest = false;
            break;
        }

        if (i % 2 === 0) {
            waterSupplay *= 0.70;
            energy *= 1.05;
        }

        if (i % 3 === 0) {
            foodSupplay -= foodSupplay / players;
            energy *= 1.1;
        }

    }

    if (readyForTheQuest) {
        console.log(`You are ready for the quest. You will be left with - ${energy.toFixed(2)} energy!`);
    } else {
        console.log(`You will run out of energy. You will be left with ${foodSupplay.toFixed(2)} food and ${waterSupplay.toFixed(2)} water.`);
        
    }
}

solve([
    12,
    6,
    4430,
    9.8,
    5.5,
    620.3,
    840.2,
    960.1,
    220,
    340,
    674,
    365,
    345.5,
    212,
    412.12,
    258,
    496
    ]);