function halfSumElement(input) {
    let n = Number(input.shift());
    let sum = 0;
    let max = Number.MIN_SAFE_INTEGER;

    for (let index = 1; index <= n; index++) {
        let currentNumber = Number(input.shift());
        sum += currentNumber;

        if(currentNumber > max){
            max = currentNumber;
        }
    }

    let halfSum = sum / 2;
    let diff = Math.abs(max - (sum - max));

    if (halfSum == max) {
        console.log('Yes');
        console.log(`Sum = ${halfSum}`);
    } else {
        console.log('No');
        console.log(`Diff = ${diff}`);
    }
}
halfSumElement([4,6,1,2,3])