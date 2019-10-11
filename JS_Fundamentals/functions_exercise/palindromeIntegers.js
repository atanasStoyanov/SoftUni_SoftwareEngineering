function solve(arr) {
    for (let i = 0; i < arr.length; i++) {
        let integer = String(arr[i]);
        let reversedInterger = [];
        for (let j = 0; j < integer.length; j++) {
            let digit = integer[j];
            reversedInterger.unshift(digit);
        }

        reversedInterger = reversedInterger.join('');

        if (integer == reversedInterger) {
            console.log(true);
        } else {
            console.log(false);
        }
    }
}

solve([32, 2, 232, 1010]);