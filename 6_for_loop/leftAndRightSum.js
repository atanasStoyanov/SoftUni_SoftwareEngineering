function leftAndRightSum(input) {
    let n = Number(input.shift());
    let leftSum = 0;
    let rightSum = 0; 

    for (let index = 1; index <=n; index++){
        let currentNumber = Number(input.shift());
        leftSum += currentNumber;
    }
    for(let index = 1; index <= n; index++){
        let currentNumber = Number(input.shift());
        rightSum += currentNumber;
    }
    if (leftSum == rightSum) {
        console.log(`Yes, sum = ${leftSum}`)
    }else{
        let diff = Math.abs(leftSum - rightSum);
        console.log(`No, diff = ${diff}`)
    }
}

leftAndRightSum([2,90,9,50,50])