function solve(arr) {
    let output = arr
        .sort((a, b) => a - b)
        .slice(0, 2)
        .join(' ');

    console.log(output);
}

solve([30, 15, 50, 5])