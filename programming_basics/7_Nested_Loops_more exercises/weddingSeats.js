function weddingSeats(input) {
    let lastSectorSymbol = input.shift();
    let rowsFirstSector = Number(input.shift());
    let seatsPerRow = Number(input.shift());
    let seatsPerOddRow = seatsPerRow;
    let seatsCounter = 0;

    let lastSectorNumber = lastSectorSymbol.charCodeAt(lastSectorSymbol);

    for (let sector = 65; sector <= lastSectorNumber; sector++) {
        for (let rows = 1; rows <= rowsFirstSector; rows++) {
            if(rows % 2 == 0){
                seatsPerOddRow += 2;
            }else{
                seatsPerOddRow =seatsPerRow;
            }
            for (let seats = 97; seats < 97 + seatsPerOddRow; seats++) {
                console.log(`${String.fromCharCode(sector)}${rows}${String.fromCharCode(seats)}`);
                seatsCounter++;
            }
            
        } 
        rowsFirstSector++;
    }
    console.log(seatsCounter);
}
weddingSeats(['C',4,2])