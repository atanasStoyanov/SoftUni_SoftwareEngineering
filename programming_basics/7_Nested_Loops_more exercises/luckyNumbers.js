function luckyNumbers (input) {
    let n = Number(input.shift());
    let printLine = '';

    for (let i = 1; i <= 9; i++) {

        for (let j = 1; j <= 9; j++) {
        
            for (let k = 1; k <= 9; k++) {
        
                for (let m = 1; m <= 9; m++) {
        
                    if ((i + j) == (k + m) && n % (i + j) == 0) {
                        printLine += `${i}${j}${k}${m} `;
                    }     
                }    
            }   
        }  
    }

    console.log(printLine);
}

luckyNumbers([24])