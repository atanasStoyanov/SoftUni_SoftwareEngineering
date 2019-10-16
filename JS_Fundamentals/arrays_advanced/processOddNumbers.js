function solve(arr) {
    let resultArr = arr
        .filter((e, i) => i % 2 !== 0)
        .map(a => a * 2)
        .reverse()
        .join(' ');

    console.log(resultArr);
}

solve([10, 15, 20, 25]);