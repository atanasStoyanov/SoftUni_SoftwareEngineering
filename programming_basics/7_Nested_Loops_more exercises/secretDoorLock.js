function secretDoorLock(input) {
    let maxHundreds = Number(input.shift());
    let maxTens = Number(input.shift());
    let maxOnes = Number(input.shift());

    for (let hundres = 1; hundres <= maxHundreds; hundres++){
        for (let tens = 1; tens <= maxTens; tens++) {
            for (let ones = 1; ones <= maxOnes; ones++) {
                if ((hundres % 2 == 0 && ones % 2 == 0) && (tens == 2 || tens == 3 || tens == 5 || tens == 7)){
                    console.log(`${hundres} ${tens} ${ones}`);
                }
                
            }
            
        }
       
    }
}

secretDoorLock([8,2,8])