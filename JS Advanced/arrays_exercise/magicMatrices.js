
function solve(matrix) {
    let sum = matrix[0].reduce((a, b) => a + b);
    let isMagic = true;

    for (let row = 0; row < matrix.length; row++) {
        let currentRow = matrix[row]
        let rowSum = currentRow.reduce((a, b) => a + b);
        let columnSum = matrix.reduce((a, b) => a + b[row], 0)

        if (rowSum !== sum || columnSum !== sum) {
            isMagic = false;
            break;
        }

    }


    return isMagic;

}

console.log(solve([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]
]));
