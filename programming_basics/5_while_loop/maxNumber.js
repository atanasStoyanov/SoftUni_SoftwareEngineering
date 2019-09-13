function maxNumber (input) {
    let n = Number(input.shift());
    let count = 0;
    let max = Number.MIN_SAFE_INTEGER;

    while (count < n) {
        let num = Number(input.shift());        

        if (num > max) {
            max = num;
        }

        count++;
    }
    console.log(max);
}
maxNumber(['2','100','99'])