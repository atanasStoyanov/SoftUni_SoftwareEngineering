function solve(arr) {
    arr = arr.map(Number);
    console.log(arr[0] + arr.pop());
}

solve(['20', '30', '40']);