function solve(arr) {
    let sum = 0;
    let isMagical = true;

    for (let i = 0; i < arr.length; i++) {
        let sumRow = 0
        let sumColumn = 0;

        for (let j = 0; j < arr[i].length; j++) {
            sumRow += arr[i][j];
            sumColumn += arr[j][i];
        }

        if (i === 0) {
            sum = sumRow;
        }

        if (sumRow !== sum || sumColumn !== sum) {
            isMagical = false;
            break;
        }
    }

    console.log(isMagical);
}

solve([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]

);