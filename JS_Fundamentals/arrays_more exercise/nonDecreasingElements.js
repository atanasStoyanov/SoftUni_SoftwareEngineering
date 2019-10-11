function solve(arr) {
    let printLine = [];
    let biggestElement = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];

        if (element >= biggestElement) {
            printLine.push(element);
            biggestElement = element;
        }
    }

    console.log(printLine.join(' '));

}

solve([1, 3, 8, 4, 10, 12, 3, 2, 24]);