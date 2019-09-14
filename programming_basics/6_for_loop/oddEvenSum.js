function oddEvenSum(input) {
    let n = Number(input.shift());
    let sumOdd = 0;
    let sumEven = 0;

    for (let index = 1; index <= n; index++) {
        let currentNumber = Number(input.shift());

        if (index % 2 == 0) {
            sumEven +=currentNumber;
        } else {
            sumOdd +=currentNumber;
        }
    }

    if (sumEven == sumOdd) {
        console.log('Yes');
        console.log(`Sum = ${sumEven}`);
    } else {
        let diff = Math.abs(sumEven - sumOdd);
        console.log('No');
        console.log(`Diff = ${diff}`);
    }
}

oddEvenSum([4,3,5,1,-2])