function solve(arr) {

    return arr
        .slice(0, arr.length - 1)
        .join(arr[arr.length - 1]);

}

console.log(solve([
    'One',
    'Two',
    'Three',
    'Four',
    'Five',
    '-'
]));
