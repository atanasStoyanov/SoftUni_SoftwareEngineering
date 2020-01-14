function solve(num) {

    let numToArr = num
        .toString()
        .split('');

    let areEqual = numToArr
        .every((num, i, arr) => num === arr[0]);

    let sum = numToArr
        .reduce((a, b) => a + Number(b), 0);

    return areEqual + '\n' + sum;
}

console.log(solve(1234));
