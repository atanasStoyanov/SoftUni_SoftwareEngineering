function sumOfTwoNumbers(input) {
    let numStart = Number(input.shift());
    let numEnd = Number(input.shift());
    let magicNumber = Number(input.shift());
    let combinationsCounter = 0;
    let combinationFound = false;

    for (let num1 = numStart; num1 <= numEnd; num1++) {
        for (let num2 = numStart; num2 <= numEnd; num2++) {
            combinationsCounter++
            if((num1 + num2) == magicNumber){
                combinationFound = true;
                console.log(`Combination N:${combinationsCounter} (${num1} + ${num2} = ${magicNumber})`);
                break;
            }
            if(combinationFound){
                break;
            }
        }  
        if(combinationFound){
            break;
        }
    }
    if(combinationFound == false){
        console.log(`${combinationsCounter} combinations - neither equals ${magicNumber}`);
    }
}

sumOfTwoNumbers([88,888,2000])