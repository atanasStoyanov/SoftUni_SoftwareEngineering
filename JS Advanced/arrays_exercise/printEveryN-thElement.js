function solve(arr) {

    return arr
        .slice(0, arr.length - 1)
        .filter((el, i) => i % arr[arr.length - 1] === 0)
        .join('\n');    
    
}

console.log(solve(['5', '20', '31', '4', '20', '2']));
