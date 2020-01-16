function solve(arr) {
    return arr
        .filter((el, i) => i % 2 === 0)
        .join(' ');
}

console.log(solve(['20', '30', '40']));
