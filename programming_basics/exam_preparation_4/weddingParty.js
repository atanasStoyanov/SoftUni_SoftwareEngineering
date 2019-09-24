function weddingParty(input) {
    let singerBudget = Number(input.shift());
    let command = input.shift();
    let sum = 0;
    let guestsCounter = 0;

    while (command !== 'The restaurant is full') {
        command = Number(command);
    
        if (command >= 5) {
            sum += command * 70;
        } else {
            sum += command * 100;
        }
    
        guestsCounter += command;
        command = input.shift();
    }
    
    if (sum >= singerBudget) {
        let diff = sum - singerBudget;
        console.log(`You have ${guestsCounter} guests and ${diff} leva left.`);
    } else {
        console.log(`You have ${guestsCounter} guests and ${sum} leva income, but no singer.`);
    }
}

weddingParty([3200, 5, 12, 6, 6, 12, 'The restaurant is full']);