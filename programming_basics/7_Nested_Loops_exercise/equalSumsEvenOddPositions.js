function equalSumsEvenOddPosiions(input) {
    let n = Number(input.shift());
    let n2 = Number(input.shift());
    let printNumbers = '';

    for (let i = n; i <= n2 ; i++) {
        let sumOdd = 0;
        let sumEven = 0; 
        let currentNum = String(i)
        for (let num = 0; num < currentNum.length ; num++) {
            let currentDigit = currentNum.charCodeAt(num)
            if(num % 2 == 0){
                sumOdd +=currentDigit;
            }else{
                sumEven += currentDigit;
            }
        }
        if(sumEven == sumOdd){
            printNumbers += `${n} `;
        }
        n++
    }
    if(printNumbers != ''){
    console.log(printNumbers);
    }
}

equalSumsEvenOddPosiions(['100000','100050'])