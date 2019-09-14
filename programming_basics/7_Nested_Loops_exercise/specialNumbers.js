function specialNumbers(input) {
    let num = Number(input[0]);
    let printLine = '';

    for (let i = 1; i <= 9; i++) {
        
        for (let j = 1; j <= 9; j++) {
        
            for (let k = 1; k <= 9; k++) {
        
                for (let m = 0; m <= 9; m++) {
        
                    if ((num % i == 0) && (num % j == 0) && (num % k == 0) && (num % m == 0)) {
                        printLine += `${i}${j}${k}${m} `;
                    }
                } 
            }
        }       
    }
    console.log(printLine);
}

specialNumbers([16]);