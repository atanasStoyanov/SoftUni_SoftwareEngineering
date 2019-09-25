function solve(firstNum, secondNum, thirdNum) {
    let arr = [];
    arr.push(firstNum, secondNum, thirdNum);

    arr = arr.sort((a, b) => b - a);

    for (const num of arr) {
        console.log(num);
    }
}

solve(2, 1, 3);