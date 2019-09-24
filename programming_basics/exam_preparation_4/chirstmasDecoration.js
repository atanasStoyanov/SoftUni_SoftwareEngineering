function christmasDecoration(input) {
    let budget = Number(input.shift());
    let command = input.shift();

    while (command !== 'Stop') {
        let sum = 0;

        for (let index = 0; index < command.length; index++) {
            sum += command.charCodeAt(index);
        }

        if (budget >= sum) {
            console.log('Item successfully purchased!');
            budget -= sum;
        } else {
            console.log('Not enough money!');
            break;
        }

        command = input.shift();
        
        if (command === 'Stop') {
            console.log(`Money left: ${budget}`);
        }
    }
}

christmasDecoration([5000, 'Christmas lights', 'wreath', 'Stop']);