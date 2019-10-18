function solve(arr) {
    const resultArr = [];
    arr.sort((a, b) => a- b);

    while (arr.length > 0) {
        resultArr.push(arr.pop());
        resultArr.push(arr.shift());
    }

    console.log(resultArr.join(' '));
    
}

solve([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);