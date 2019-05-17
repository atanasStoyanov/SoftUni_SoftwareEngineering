function safePasswordGenerator(input) {
    let a = Number(input.shift());
    let b = Number(input.shift());
    let maxPassCounter = Number(input.shift());
    let passCounter = 0; 
    let symbol1 = 35;
    let symbol2 = 64;
    let printLine = '';

    for (let i = 1; i <= a ; i++) {
        for (let j = 1; j <= b; j++) {
            printLine += `${String.fromCharCode(symbol1)}${String.fromCharCode(symbol2)}${i}${j}${String.fromCharCode(symbol2)}${String.fromCharCode(symbol1)}|`;
            symbol1++;
            if(symbol1 == 56){
                symbol1 = 35;
            }
            symbol2++;
            if(symbol2 == 97){
                symbol2 = 64;
            }
            passCounter++
            if (passCounter == maxPassCounter){
                break;
            }
        } 
        if (passCounter == maxPassCounter){
            break;
        }
    }
    console.log(printLine);
}

safePasswordGenerator([20,50,10])