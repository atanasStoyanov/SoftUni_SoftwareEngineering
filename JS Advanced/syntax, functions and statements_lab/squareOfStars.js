function solve(size = 5) {
    let square = ''

    for (let i = 0; i < size; i++) {
        square += '* '.repeat(size) + '\n';   
    }

    return square;
}

console.log(solve());
