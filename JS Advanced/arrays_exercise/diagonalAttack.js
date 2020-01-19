function solve(arr) {
    let matrix = arr.map(row => row.split(' '));
    let firstDiagonal = 0;
    let secondDiagonal = 0;

    for (let row = 0; row < matrix.length; row++) {
        firstDiagonal += Number(matrix[row][row]);
        secondDiagonal += Number(matrix[row][matrix.length - 1 - row]);        
    }

    if (firstDiagonal === secondDiagonal) {

        for (let row = 0; row < matrix.length; row++) {
            let currentRow = matrix[row];
            
            for (let i = 0; i < currentRow.length; i++) {
                
                if (row !== i && row !== matrix.length - 1 - i) {
                    matrix[row][i] = firstDiagonal;
                }                 
            }
        }
    }

    return matrix
        .map(row => row.join(' '))
        .join('\n');
}

console.log(solve([
    '5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1'
]));
