function solve(firstNum, operator, secondNum) {
    let sum = 0;

    switch (operator) {
        case '+':
            sum = firstNum + secondNum;
            break;
        case '-':
            sum = firstNum - secondNum;
            break;
        case '*':
            sum = firstNum * secondNum;
            break;
        case '/':
            sum = firstNum / secondNum;
    }

    console.log(sum.toFixed(2));
}

solve(5, '+', 10);