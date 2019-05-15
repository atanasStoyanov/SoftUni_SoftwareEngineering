function OddEvenPositions(input) {
    let n = Number(input.shift());
    let oddMin = Number.MAX_SAFE_INTEGER;
    let oddMax = Number.MIN_SAFE_INTEGER;
    let oddSum = 0;
    let evenMin = Number.MAX_SAFE_INTEGER;
    let evenMax = Number.MIN_SAFE_INTEGER;
    let evenSum = 0;

    for (let index = 1; index <= n; index++){
        let currentNumber = Number(input.shift());
        if (index % 2 == 0){
            evenSum += currentNumber;
            if(currentNumber > evenMax){
                evenMax = currentNumber;
            }
            if(currentNumber < evenMin){
                evenMin = currentNumber
            }
        }else{
            oddSum += currentNumber;
            if(currentNumber > oddMax){
                oddMax = currentNumber;
            }
            if(currentNumber < oddMin){
                oddMin = currentNumber
            }
        }  
    }
    console.log(`OddSum=${oddSum.toFixed(2)},`)
    if (oddMin == Number.MAX_SAFE_INTEGER){
        console.log('OddMin=No,');
    }else{
        console.log(`OddMin=${oddMin.toFixed(2)},`)
    }
    if (oddMax == Number.MIN_SAFE_INTEGER){
        console.log('OddMax=No,');
    }else{
        console.log(`OddMax=${oddMax.toFixed(2)},`)
    }

    console.log(`EvenSum=${evenSum.toFixed(2)},`)
    if (evenMin == Number.MAX_SAFE_INTEGER){
        console.log('EvenMin=No,');
    }else{
        console.log(`EvenMin=${evenMin.toFixed(2)},`)
    }
    if (evenMax == Number.MIN_SAFE_INTEGER){
        console.log('EvenMax=No');
    }else{
        console.log(`EvenMax=${evenMax.toFixed(2)}`)
    }
}

OddEvenPositions([5,3,-2,8,11,-3])