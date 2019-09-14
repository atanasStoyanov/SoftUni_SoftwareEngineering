function carNumber(input) {
    let startNum = Number(input.shift());
    let endNum = Number(input.shift());
    let printLine ='';

    for (let i = startNum; i <= endNum; i++) {

        for (let j = startNum; j <= endNum; j++) {
        
            for (let k = startNum; k <= endNum; k++) {
        
                for (let m = startNum; m <= endNum; m++) {
        
                    if (((i % 2 == 0 && m % 2 !=0) || (i % 2 != 0 && m % 2 == 0)) && ((j + k) % 2 == 0) && i > m) {
                        printLine += `${i}${j}${k}${m} `;
                    }                    
                }              
            }           
        }  
    }
    
    console.log(printLine);
}
carNumber([5,8])