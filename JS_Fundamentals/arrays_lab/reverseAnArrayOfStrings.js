function solve(arr) {
    let reversedArr = [];

    for (let i = arr.length - 1; i >= 0; i--) {
        reversedArr.push(arr[i]);
    }

    console.log(reversedArr.join(' '));
}

solve(['a', 'b', 'c', 'd', 'e']);