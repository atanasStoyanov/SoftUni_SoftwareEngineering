function evenOddSubstr (arr) {
    let sumEven = 0;
    let sumOdd = 0;

    for (let i = 0; i < arr.length; i++) {
        let currentNum = Number(arr[i]);
        if (currentNum % 2 === 0){
            sumEven += currentNum;
        } else {
            sumOdd += currentNum;
        }    
    }
    
    console.log(sumEven - sumOdd);
}

evenOddSubstr([3,5,7,9])