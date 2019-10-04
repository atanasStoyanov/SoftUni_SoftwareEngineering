function solve(arr, num) {
    for (let i = 0; i < arr.length - 1; i++) {
        let element = Number(arr[i]);

        for (let j = i + 1; j < arr.length; j++) {
            let nextElement = Number(arr[j]);

            if (element + nextElement === num) {
                console.log(`${element} ${nextElement}`);
            }
        }
    }
}

solve([14, 20, 60, 13, 7, 19, 8], 27);