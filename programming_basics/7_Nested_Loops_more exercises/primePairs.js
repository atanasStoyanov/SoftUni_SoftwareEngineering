function primePairs(input) {
    let firstPairStart = Number(input.shift());
    let secondPairStart = Number(input.shift());
    let diffFirstPair = Number(input.shift());
    let diffSecondPair = Number(input.shift());
    let firstPairEnd = firstPairStart + diffFirstPair;
    let secondPairEnd = secondPairStart + diffSecondPair;

    for (let num1 = firstPairStart; num1 <= firstPairEnd; num1++) {

        for (let num2 = secondPairStart; num2 <= secondPairEnd; num2++) {
            let firstPairIsPrime = true;

            if (num1 % 2 == 0 || num1 % 3 == 0 || num1 % 5 == 0 || num1 % 7 == 0 || num1 % 9 == 0) {
                firstPairIsPrime = false;
            }
    
            let secondPairIsPrime = true;

            if (num2 % 2 == 0 || num2 % 3 == 0 || num2 % 5 == 0 || num2 % 7 == 0 || num2 % 9 == 0) {
                secondPairIsPrime = false;
            }

            if (firstPairIsPrime && secondPairIsPrime){
                console.log(`${num1}${num2}`);
            }
        }
    }
}

primePairs([10,30,9,6])