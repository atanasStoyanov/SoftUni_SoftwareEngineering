function solve(arr) {
    let firstDiagonal = 0;
    let secondDiagonal = 0;

    for (let row = 0; row < arr.length; row++) {
        firstDiagonal += Number(arr[row][row]);
        secondDiagonal += Number(arr[row][arr.length - 1 - row]);
    }

    return firstDiagonal + ' ' + secondDiagonal;
}

console.log(solve([
    [3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]
]));
