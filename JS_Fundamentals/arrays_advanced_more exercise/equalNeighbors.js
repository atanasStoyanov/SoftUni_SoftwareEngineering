function solve(arr) {
    let equalPairs = 0;

    for (let i = 0; i < arr.length - 1; i++) {
        let currentLine = arr[i];
        for (let j = 0; j < currentLine.length; j++) {
            let element = currentLine[j];
            let nextElement = currentLine[j + 1];
            let bottomElement = arr[i + 1][j];

            if (element === nextElement) {
                equalPairs ++;
            }

            if (element === bottomElement) {
                equalPairs ++;
            }

        }
    }

    let lastLine = arr[arr.length - 1];

    for (let i = 0; i < lastLine.length - 1; i++) {
        let el = lastLine[i];
        let nextEl = lastLine[i + 1];
        
        if (el === nextEl) {
            equalPairs++;
        }
    }

    console.log(equalPairs);

}

solve([['test', 'yes', 'yo', 'ho'],
['well', 'done', 'yo', 'ho'],
['not', 'done', 'yet', '5']]

);