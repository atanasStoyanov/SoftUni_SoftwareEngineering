function uniquePinCodes (input){
    let firstNumMax = Number(input.shift());
    let secondNumMax = Number(input.shift());
    let thirdNumMax = Number(input.shift());

    for (let num1 = 1; num1 <= firstNumMax; num1++){
        for (let num2 = 2; num2 <= secondNumMax; num2++) {
            for (let num3 = 1; num3 <= thirdNumMax; num3++) {
                let isPrime = false;
                if(num2 == 2 || num2 == 3 || num2 == 5 || num2 == 7){
                    isPrime = true;
                }
                if ((num1 % 2 == 0) && isPrime && (num3 % 2 == 0)){
                    console.log(`${num1} ${num2} ${num3}`);
                }  
            }   
        }
    }
}
uniquePinCodes([8,2,8])