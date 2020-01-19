function solve(inputArr) {
    let rows = inputArr[0];
    let cols = inputArr[1];
    let starRow = inputArr[2];
    let starCol = inputArr[3];

    let matrix = Array.from(Array(rows), () => new Array(cols))

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            matrix[row][col] = Math.max(Math.abs(row - starRow), Math.abs(col - starCol)) + 1;
        }
    }

    return matrix
        .map(row => row.join(" "))
        .join("\n");
}

console.log(solve([4, 4, 0, 0]));