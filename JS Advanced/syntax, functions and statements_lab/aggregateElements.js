function solve(inputArr) {
    let output = [];

    output.push(inputArr.reduce((agr, el) => agr + el));

    output.push(inputArr
        .map(el => 1 / el)
        .reduce((agr, el) => agr + el));

    output.push(inputArr.join(''));

    return output.join('\n');
}

console.log(solve([2, 4, 8, 16]));
