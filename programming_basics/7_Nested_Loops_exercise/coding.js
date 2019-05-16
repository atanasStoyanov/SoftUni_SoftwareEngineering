function coding(input) {
    let n = input.shift();

    for (let row = n.length; row >= 1; row--) {
        let currentNum = Number(n[row - 1])
        if (currentNum == 0){
            console.log('ZERO');
            continue;
        }
        let printSymbol = ''
        let symbolNum = currentNum + 33;
        for (let num = 1; num <= currentNum ; num++) {
            printSymbol += String.fromCharCode(symbolNum);
            }
            console.log(printSymbol);
    }
}

coding(['123456789'])