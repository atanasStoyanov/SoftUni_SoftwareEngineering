function solve(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let helmetRepairs = 0;
    let swordRepairs = 0;
    let shieldRepairs = 0;
    let armorRepairs = 0;
    let totalExpense = 0

    for (let i = 1; i <= lostFights; i++) {

        if (i % 2 === 0 && i % 3 === 0) {
            helmetRepairs++;
            swordRepairs++;
            shieldRepairs++;

            if (shieldRepairs % 2 === 0) {
                armorRepairs++;
            }

        } else if (i % 2 === 0) {
            helmetRepairs++;
        } else if (i % 3 === 0) {
            swordRepairs++;
        }
    }

    totalExpense = helmetRepairs * helmetPrice + swordRepairs * swordPrice + shieldRepairs * shieldPrice + armorRepairs * armorPrice;

    console.log(`Gladiator expenses: ${totalExpense.toFixed(2)} aureus`);
}

solve(7, 2, 3, 4, 5);