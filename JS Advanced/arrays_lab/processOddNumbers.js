function solve(arr) {
    return arr
        .filter((el, i) => i % 2 !== 0)
        .map(el => Number(el) * 2)
        .reverse()
        .join(' ');
}

console.log(solve([3, 0, 10, 4, 7, 3]));
