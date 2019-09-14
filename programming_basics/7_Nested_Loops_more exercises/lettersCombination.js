function lettersCombination(input) {
    let startLetter = input.shift();
    let endLetter = input.shift();
    let letterToMiss = input.shift();
    let printLine = '';
    let combinationsCounter = 0;

    let startNumber = startLetter.charCodeAt(startLetter);
    let endNumber = endLetter.charCodeAt(endLetter);
    let numberToMiss = letterToMiss.charCodeAt(letterToMiss);

    for (let i = startNumber; i <= endNumber; i++) {

        for(let j = startNumber; j <= endNumber; j++) {

            for (let k = startNumber; k <= endNumber; k++) {

                if(i != numberToMiss && j != numberToMiss && k != numberToMiss) {
                    printLine += `${String.fromCharCode(i)}${String.fromCharCode(j)}${String.fromCharCode(k)} `;
                    combinationsCounter++;
                }    
            }
        }   
    }
    
    console.log(`${printLine}${combinationsCounter}`);
}

lettersCombination(['a','c','z'])