function solve(arr) {
    let step = Number(arr.pop());
    let result = [];

    for (let i = 0; i < arr.length; i += step) {
        result.push(arr[i]);
    }

    console.log(result.join(' '));
}

solve(['5', '20', '31', '4', '20', '2'])