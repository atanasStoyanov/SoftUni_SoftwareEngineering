function solve(arr, startIndex, endIndex) {
    
    if (Array.isArray(arr) === false || !arr.every(e => typeof e === 'number' )) {
        return NaN;
    }

    if (startIndex < 0) {
        startIndex = 0;
    }

    if (endIndex > arr.length) {
        endIndex = arr.length;
    }

    return arr
        .slice(startIndex, endIndex + 1)
        .reduce((a, b) => a + b, 0);
}

console.log(solve([10, 'twenty', 30, 40], 0, 2));
