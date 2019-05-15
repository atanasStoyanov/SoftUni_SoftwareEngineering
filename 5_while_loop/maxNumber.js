function maxNumber(input){
    let n = Number(input.shift());
    let count = 0;
    let max = -999999999999

    while (count < n){
        let num = Number(input.shift());
        count++;
        if (num > max) {
            max = num;
        }
    }
    console.log(max)
}
maxNumber(['2','100','99'])