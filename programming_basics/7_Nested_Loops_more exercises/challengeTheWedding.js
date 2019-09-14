function challengeTheWedding(input) {
    let menNumber = Number(input.shift());
    let womenNumber = Number(input.shift());
    let tablesNumber = Number(input.shift());
    let printLine = '';
    let tablesCounter = 0;
    
    for (let j = 1; j <= menNumber; j++) {

        for (let k = 1; k <= womenNumber; k++) {
            tablesCounter++;

            if (tablesCounter > tablesNumber) {
                break;
            } 
            printLine += `(${j} <-> ${k}) `;    
        } 
    }
    
    console.log(printLine);
}
challengeTheWedding([2,2,6])