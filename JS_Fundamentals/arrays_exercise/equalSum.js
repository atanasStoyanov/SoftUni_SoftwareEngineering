function solve(arr) {
    let elementExists = false;

    for (let i = 0; i < arr.length; i++) {
        let element = Number(arr[i]);
        let leftSum = 0;
        let rightSum = 0;

        for (let j = 0; j < i; j++) {
            let previousElement = Number(arr[j]);
            leftSum += previousElement;
        }

        for (let k = i + 1; k < arr.length; k++) {
            let nextElement = Number(arr[k]);
            rightSum += nextElement;
        }

        if (leftSum === rightSum) {
            console.log(i);
            elementExists = true;
            break;
        }
    }

    if (!elementExists) {
        console.log('no');
    }
}

solve([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);