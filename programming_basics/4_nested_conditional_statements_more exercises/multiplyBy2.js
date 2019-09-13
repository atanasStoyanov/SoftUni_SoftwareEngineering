function multiplyBy2 (input) {
    let num = Number(input.shift());

    while (num >= 0){
        let result = num * 2;
        console.log(`Result: ${result.toFixed(2)}`);

        num = Number(input.shift());
    }
    console.log('Negative number!');
}

multiplyBy2([23.43, 12.3245, 0, 65.23432, 23, 65, -12,])