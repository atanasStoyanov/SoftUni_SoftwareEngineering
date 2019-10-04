function solve(arr, num) {
    for (let index = 1; index <= num; index++) {
        let element = arr.shift();
        arr.push(element);
    }

    console.log(arr.join(' '));
}

solve([51, 47, 32, 61, 21], 2);