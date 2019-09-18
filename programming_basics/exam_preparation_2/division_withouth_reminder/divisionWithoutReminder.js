function devisionWithoutReminder (input) {
    let n = Number(input.shift());
    let devidedByTwo = 0;
    let devidedByThree = 0;
    let devidedByFour = 0;

    for (let index = 0; index < n; index++) {
        let currentNumber = Number(input.shift());

        if (currentNumber % 2 === 0) {
            devidedByTwo ++;
        }

        if (currentNumber % 3 === 0) {
            devidedByThree ++;
        }

        if (currentNumber % 4 === 0) {
            devidedByFour ++;
        }
    }

    devidedByTwo = devidedByTwo / n * 100;
    devidedByThree = devidedByThree / n * 100;
    devidedByFour = devidedByFour / n * 100;

    console.log(`${devidedByTwo.toFixed(2)}%`);
    console.log(`${devidedByThree.toFixed(2)}%`);
    console.log(`${devidedByFour.toFixed(2)}%`);
}

devisionWithoutReminder([3, 3, 6, 9]);