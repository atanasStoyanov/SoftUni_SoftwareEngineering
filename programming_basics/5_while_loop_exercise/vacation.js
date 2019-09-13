function vacation (input){
    let neededMoney = Number(input.shift());
    let availableMoney = Number(input.shift());
    let counter = 0; 
    let spendsCounter = 0;

    while (availableMoney < neededMoney && spendsCounter < 5) {
        let action = input.shift();
        let currentMoney = Number(input.shift());
        counter++;

        if (action === 'spend') {
            spendsCounter++;

            if (availableMoney < currentMoney) {
                availableMoney = 0;
            } else  {
                availableMoney -= currentMoney;
            }

        } else {
            spendsCounter = 0;
            availableMoney += currentMoney;
        }
    }

    if (spendsCounter == 5) {
        console.log(`You can't save the money.`);
        console.log(`${counter}`);
    }

    if(availableMoney >= neededMoney) {
        console.log(`You saved the money for ${counter} days.`);
    }
}

vacation([250,150,'spend',50,'spend',50,'save',100,'save',100])