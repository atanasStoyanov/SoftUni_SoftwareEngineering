function numberSequence(input){
    let n = Number(input.shift());
    let max = -99999999999;
    let min = 99999999999;

    for (let index = 1; index <= n; index++){
        let currentNumber = Number(input.shift());
        if (currentNumber >max) {
            max = currentNumber;
        }
        if(currentNumber < min){
            min = currentNumber;
        }
    }
    console.log(`Max number: ${max}`);
    console.log(`Min number: ${min}`); 
}

numberSequence([6,250,5,2,0,100,1000])