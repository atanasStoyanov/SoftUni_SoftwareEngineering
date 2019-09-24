function chirstmasMarket(input) {
    let moneyGoal = Number(input.shift());
    let fantasyBooksNumber = Number(input.shift());
    let horrorBooksNumber = Number(input.shift());
    let romancBooksNumber = Number(input.shift());

    let income = fantasyBooksNumber * 14.90 + horrorBooksNumber * 9.80 + romancBooksNumber * 4.30;
    let tax = income * 0.20;
    income -= tax;
    let diff = Math.abs(moneyGoal - income);

    if (income >= moneyGoal) {
        let diff = Math.abs(moneyGoal - income);
        let sellersProfit = Math.floor((diff * 0.10));
        let charitySum = moneyGoal + (diff - sellersProfit);

        console.log(`${charitySum.toFixed(2)} leva donated.`);
        console.log(`Sellers will receive ${sellersProfit} leva.`);
    } else {
        console.log(`${diff.toFixed(2)} money needed.`);
    }
}
chirstmasMarket([200, 15, 10, 5]);