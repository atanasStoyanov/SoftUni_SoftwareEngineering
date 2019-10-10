function solve(firstNum, secondNum, operator) {
    let addition = (a, b) => a + b;
    let subtraction = (a, b) => a - b;
    let multiplication = (a, b) => a * b;
    let division = (a, b) => a / b;

    switch (operator) {
        case 'add':
            console.log(addition(firstNum, secondNum));
            break;
        case 'subtract':
            console.log(subtraction(firstNum, secondNum));
            break;
        case 'multiply':
            console.log(multiplication(firstNum, secondNum));
            break;
        case 'divide':
            console.log(division(firstNum, secondNum));
            break;
    }
}

solve(5, 5, 'multiply');