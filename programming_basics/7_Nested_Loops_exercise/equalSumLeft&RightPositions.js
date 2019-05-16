function equalSum(input) {
    let n1 = Number(input.shift());
    let n2 = Number(input.shift());
    let printString = ''

    for (let i = n1; i <= n2; i++) {
        let leftSum = 0;
        let rightSum = 0;
        let middleNum = 0;
        let curentNum = String(i);
        for (let j = 0; j < curentNum.length; j++) {
            let curentDigit = Number(curentNum[j])
            if (j < 2 ){
                leftSum += curentDigit;
            }else if(j > 2){
                rightSum += curentDigit;
            }else {
                middleNum = curentDigit;
            }
        }
        if(leftSum > rightSum){
            rightSum += middleNum;
        }else if(leftSum < rightSum){
            leftSum += middleNum;
        }
        if(leftSum == rightSum){
            printString += `${i} `;
        }
    }
    console.log(printString);
}

equalSum([12345, 12666])