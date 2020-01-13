function solve(firstNum, secondNum, operator) {
    let operatorsMap = {
        '+': (num1, num2) => num1 + num2,
        '-': (num1, num2) => num1 - num2, 
        '*': (num1, num2) => num1 * num2, 
        '/': (num1, num2) => num1 / num2, 
        '%': (num1, num2) => num1 % num2, 
        '**': (num1, num2) => num1 ** num2
    }

    return operatorsMap[operator](firstNum, secondNum);
}

console.log(solve(2, 3, '**'));
