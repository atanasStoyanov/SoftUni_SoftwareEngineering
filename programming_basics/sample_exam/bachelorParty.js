function bachelorParty(input) {
    let singerBudget = Number(input.shift());
    let gainedMoney = 0;
    let guestsNumber = 0;
    let command = input.shift();

    while (true) {
        let moneyFromGroup = 0;

        if (command === 'The restaurant is full') {
            break;
        } else if (+command >= 5) {
            moneyFromGroup = +command * 70;
        } else {
            moneyFromGroup = +command * 100;
        }

        gainedMoney += moneyFromGroup;
        guestsNumber += +command;
        command = input.shift();
    }

    if (gainedMoney >= singerBudget) {
        let diff = gainedMoney - singerBudget;
        console.log(`You have ${guestsNumber} guests and ${diff} leva left.`);
    } else {
        console.log(`You have ${guestsNumber} guests and ${gainedMoney} leva income, but no singer.`);
    }
}

bachelorParty([1800, 4, 4, 4, 4, 6, 6, 'The restaurant is full']);