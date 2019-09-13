function coinsChange (input) {
    let money = Number(input.shift());
    let counter = 0;
    let remainingMoney = money;

    while (remainingMoney > 0) {
        counter += Math.floor(remainingMoney / 2);
        remainingMoney %= 2;
        counter += Math.floor(remainingMoney / 1);
        remainingMoney %= 1;
        counter += Math.floor(remainingMoney / 0.5);
        remainingMoney %= 0.5;
        remainingMoney = remainingMoney.toFixed(2);
        counter += Math.floor(remainingMoney / 0.2);
        remainingMoney %= 0.2;
        remainingMoney = remainingMoney.toFixed(2);
        counter += Math.floor(remainingMoney / 0.1);
        remainingMoney %= 0.1;
        remainingMoney = remainingMoney.toFixed(2);
        counter += Math.floor(remainingMoney / 0.05);
        remainingMoney %= 0.05;
        remainingMoney = remainingMoney.toFixed(2);
        counter += Math.floor(remainingMoney / 0.02);
        remainingMoney %= 0.02;
        remainingMoney = remainingMoney.toFixed(2);
        counter += Math.floor(remainingMoney / 0.01);
        remainingMoney %= 0.01;
        remainingMoney = remainingMoney.toFixed(2);
        break;
    }

    console.log(counter);
}

coinsChange([2.73])