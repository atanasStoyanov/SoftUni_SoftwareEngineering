function equalPairs(input) {
    let n = Number(input.shift());
    let currentSum = 0;
    let lastSum = 0;
    let maxDiff = -9999999999999999;
    let diff = 0;
 
    for (let index = 1; index <= n; index++){
        let firstNum = Number(input.shift());
        let secondNum = Number(input.shift());
        currentSum = firstNum + secondNum
        if(index >1){
            diff = Math.abs(lastSum - currentSum)
            if(diff>maxDiff){
                maxDiff = diff;
            }
        }
        lastSum = currentSum       
    }

    if (maxDiff == 0 || n == 1){
        console.log(`Yes, value=${lastSum}`)
    }else{
        console.log(`No, maxdiff=${maxDiff}`)
    }
}

equalPairs([1,5,5])