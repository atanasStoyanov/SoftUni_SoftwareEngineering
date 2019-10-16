function solve(arr) {
    const resultArr = [];

    arr.forEach(element => element < 0 ? resultArr.unshift(element) : resultArr.push(element));

    console.log(resultArr.join('\n'));
}

solve([3, -2, 0, -1]);