function solve(num) {
    num = num.toString();
    let sum = 0;
    

    for (let index = 0; index < num.length; index++) {
        let digit = Number(num[index]);
        sum += digit;
    }
    
    if (sum.toString().includes('9')) {
        console.log(`${num} Amazing? True`);
    } else {
        console.log(`${num} Amazing? False`);

    }
}

solve(999);