function solve(firstNum, secondNum, thirdNum) {
    let sum = (a, b) => a + b;
    let subtract = (a, b) => a - b;

    console.log(subtract(sum(firstNum, secondNum), thirdNum));
}

solve(23, 6, 10);