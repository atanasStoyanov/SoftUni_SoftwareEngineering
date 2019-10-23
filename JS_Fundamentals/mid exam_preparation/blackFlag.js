function solve(arr) {
    let days = Number(arr[0]);
    let dailyPlunder = Number(arr[1]);
    let target = Number(arr[2]);
    let gainedPlunder = 0;

    let additionalPlunder = a => a * 0.50;
    let warshipLoss = a => a * 0.70;

    for (let i = 1; i <= days; i++) {

        gainedPlunder += dailyPlunder;

        if (i % 3 === 0) {
            gainedPlunder += additionalPlunder(dailyPlunder);
        }

        if (i % 5 === 0) {
            gainedPlunder = warshipLoss(gainedPlunder);
        }
    }

    if (gainedPlunder >= target) {
        console.log(`Ahoy! ${gainedPlunder.toFixed(2)} plunder gained.`);
    } else {
        let percentagePlunder = (gainedPlunder / target) * 100;
        console.log(`Collected only ${percentagePlunder.toFixed(2)}% of the plunder.`);
    }
}

solve([10, 20,380]);