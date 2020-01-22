function solve(input) {
    let output = '';

    input
        .map(JSON.parse)
        .map(arr => arr
            .sort((a, b) => b - a)
            .join('|'))
        .filter((el, i, self) => self.indexOf(el) === i)
        .map(str => str.split('|'))
        .sort((a, b) => a.length - b.length)
        .map(arr => output += `[${arr.join(', ')}]\n`);

    return output;

}

console.log(solve([
    "[-3, -2, -1, 0, 1, 2, 3, 4]",
    "[10, 1, -17, 0, 2, 13]",
    "[4, -3, 3, -2, 2, -1, 1, 0]"
]));
