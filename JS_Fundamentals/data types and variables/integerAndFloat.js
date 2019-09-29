function solve(firstNum, secondNum, thirdNum) {
    let sum = firstNum + secondNum + thirdNum;

    console.log(sum % 1 === 0 ? sum += ' - Integer': sum += ' - Float');
}

solve(100, 200, 303);