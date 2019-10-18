function solve(sequanceArr, specialArr) {
    let bomb = Number(specialArr[0]);
    let power = Number(specialArr[1]);

    while (sequanceArr.includes(bomb)) {
        let explosionStart = Math.max((sequanceArr.indexOf(bomb) - power), 0);
        let explosionLength = power * 2 + 1;

        sequanceArr.splice(explosionStart, explosionLength);
    }

    console.log(sequanceArr.reduce((a, b) => a + b, 0),);

}

solve([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1]);