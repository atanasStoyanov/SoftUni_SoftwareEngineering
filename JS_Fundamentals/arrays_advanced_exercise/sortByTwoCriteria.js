function solve(arr) {
    arr = arr.sort((a, b) => a.length !== b.length ? a.length - b.length : a.localeCompare(b));

    console.log(arr.join('\n'));

}

solve(['test',
    'Deny',
    'omen',
    'Default']);