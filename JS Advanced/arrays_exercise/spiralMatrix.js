function solve(height, width) {
    let total = height * width;
    let matrix = Array.from(Array(height), () => new Array(width));

    let x = 0;
    let y = 0;
    let step = 0;

    for (let i = 0; i < total;) {

        while (y + step < width) {
            i++;
            matrix[x][y] = i;
            y++;

        }
        y--;
        x++;

        while (x + step < height) {
            i++;
            matrix[x][y] = i;
            x++;
        }
        x--;
        y--;

        while (y >= step) {
            i++;
            matrix[x][y] = i;
            y--;
        }
        y++;
        x--;
        step++;

        while (x >= step) {
            i++;
            matrix[x][y] = i;
            x--;
        }
        x++;
        y++;
    }

    return matrix
        .map(row => row.join(' '))
        .join('\n');
}

console.log(solve(5, 5));