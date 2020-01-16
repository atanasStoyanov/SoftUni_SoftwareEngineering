function solve(arr) {
    
     return Math.max(...arr
        .reduce((a, b) => a.concat(b))
        .map(Number));
}

console.log(solve([
    [20, 50, 10],
    [8, 33, 145]
]));
