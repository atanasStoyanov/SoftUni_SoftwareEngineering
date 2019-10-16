function solve(length) {
    let symbols = 'ATCGTTAGGG'.split('');
    let lineCounter = 1;
    let symbolsIndex = 0;

    function printLine(line, symbolOne, symbolTwo) {
        let printLine = '';
        switch (line) {
            case 1:
                printLine = `**${symbolOne}${symbolTwo}**`;
                break;
            case 2:
                printLine = `*${symbolOne}--${symbolTwo}*`;
                break;
            case 3:
                printLine = `${symbolOne}----${symbolTwo}`;
                break;
            case 4:
                printLine = `*${symbolOne}--${symbolTwo}*`;
                break;
        }
        console.log(printLine);

    }

    for (let i = 0; i < length; i++) {
        let firstSymbol = symbols[symbolsIndex];
        let secondSymbol = symbols[symbolsIndex + 1];
        symbolsIndex += 2;

        if (symbolsIndex === symbols.length) {
            symbolsIndex = 0;
        }
        
        printLine(lineCounter, firstSymbol, secondSymbol);

        lineCounter++;

        if (lineCounter > 4) {
            lineCounter = 1;
        }
    }
}

solve(10);