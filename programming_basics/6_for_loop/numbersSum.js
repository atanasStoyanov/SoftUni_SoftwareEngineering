function sumNumbers (input) {
    let n = Number(input.shift());
    let sum = 0;

    for (let index = 1; index <=n; index++) {
        let currentNum = Number(input.shift());
        sum +=currentNum;
    }
    
    console.log(sum);
}

sumNumbers([2,10,20])