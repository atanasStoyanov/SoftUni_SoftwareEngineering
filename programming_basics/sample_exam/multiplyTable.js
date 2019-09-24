function multiplyTable (input) {
    let num = String(input.shift());
    
    for (let firstNum = 1; firstNum <= +num[2]; firstNum++) {

        for (let secondNum = 1; secondNum <= +num[1]; secondNum++) {
        
            for (let thirdNum = 1; thirdNum <= +num[0]; thirdNum++) {
                let result = firstNum * secondNum * thirdNum;

                console.log(`${firstNum} * ${secondNum} * ${thirdNum} = ${result};`);
            }            
        }        
    }
}

multiplyTable(['222']);