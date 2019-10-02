function solve(num, arr) {
    let newArr = [];

    for (let index = 0; index < num; index++) {
        newArr.unshift(arr[index]);
    }

    console.log(newArr.join(' '));
}

solve(3, [10, 20, 30, 40, 50]);