function triangleOfNumbers (n) {
    
    for (let i = 1; i <= n; i++) {
        let printLine = '';
        for (let y = 1; y <= i; y++) {
            printLine +=`${i} `;
        }  
        console.log(printLine);      
    }
}

triangleOfNumbers(3)