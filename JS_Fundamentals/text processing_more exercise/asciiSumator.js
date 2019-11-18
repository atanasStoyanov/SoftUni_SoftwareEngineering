function solve(arr) {
    let firstChar = arr[0].charCodeAt();
    let secondChar = arr[1].charCodeAt();
    let startingChar = Math.min(firstChar, secondChar);
    let endingChar = Math.max(firstChar, secondChar);

    let sum = arr[2]
        .split('')
        .map(a => a.charCodeAt())
        .filter(a => a > startingChar && a < endingChar)
        .reduce((a, b) => a + b, 0)

    console.log(sum);

}

solve([
    'a',
    '1',
    'jfe392$#@j24ui9ne#@$'
]);