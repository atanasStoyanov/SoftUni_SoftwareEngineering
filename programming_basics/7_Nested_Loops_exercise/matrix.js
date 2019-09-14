function matrix(input) {
    let a = Number(input.shift());
    let b = Number(input.shift());
    let c = Number(input.shift());
    let d = Number(input.shift());

    for (let firstRowFirstNum = a; firstRowFirstNum <= b; firstRowFirstNum++) {

        for (let firstRowSecondNum = a; firstRowSecondNum <= b; firstRowSecondNum++) {
        
            for (let SecondRowfirstNum = c; SecondRowfirstNum <= d; SecondRowfirstNum++) {
        
                for (let SecondRowSecondNum = c; SecondRowSecondNum <= d; SecondRowSecondNum++) {
        
                    if (((firstRowFirstNum + SecondRowSecondNum) == (firstRowSecondNum + SecondRowfirstNum)) && (firstRowFirstNum != firstRowSecondNum) && (SecondRowfirstNum != SecondRowSecondNum)) {
                        console.log(`${firstRowFirstNum}${firstRowSecondNum}`);
                        console.log(`${SecondRowfirstNum}${SecondRowSecondNum}`);
                        console.log();
                    }
                   
                }
                
            }
            
        }
    }
}
matrix([1,2,3,4])