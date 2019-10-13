function solve(rows, columns) {
    let num = rows * columns;
    let usedNumbers = 0;

    while (true) {
        if (usedNumbers === num) {
            break;
        }
        let row = [];
        for (let index = 1; index <= rows; index++) {
            row.push(index);
            usedNumbers++;
        }
    }
    
}

solve(5,5)