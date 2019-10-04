function solve(arr) {
    let longestSequence = [];

    for (let i = 0; i < arr.length - 1; i++) {
        let element = arr[i];
        let sequence = [];

        for (let j = i; j < arr.length; j++) {
            let nextElement = arr[j];

            if (element === nextElement) {
                sequence.push(element);
            } else {
                break;
            }
        }

        if (sequence.length > longestSequence.length) {
            longestSequence = sequence;
        }
    }

    console.log(longestSequence.join(' '));
}

solve([0, 1, 1, 5, 2, 2, 6, 3, 3]);