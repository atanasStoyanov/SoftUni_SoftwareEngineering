function theSongOfTheWheels(input) {
    let controlNumber = Number(input.shift());
    let counter = 0;
    let printLine = '';
    let password = '';

    for (let a = 1; a <= 9; a++) {
        for (let b = 1; b <= 9; b++) {
            for (let c = 1; c <= 9; c++) {
                for (let d = 1; d <= 9; d++) {
                    if (a < b && c > d){
                        let calculation = a * b + c * d;
                        if (calculation == controlNumber){
                            printLine += `${a}${b}${c}${d} `;
                            counter++;
                            if (counter == 4){
                                password = `${a}${b}${c}${d}`;
                            }
                        }

                    }
                    
                }
                
            }
            
        }
        
    }
    if (password != '' && printLine != ''){
    console.log(`${printLine}`)    
    console.log(`Password: ${password}`);
    } else if (printLine != '' && password == ''){
        console.log(`${printLine}`);
        console.log('No!');
    }else {
        console.log('No!');
    }
}

theSongOfTheWheels([55])