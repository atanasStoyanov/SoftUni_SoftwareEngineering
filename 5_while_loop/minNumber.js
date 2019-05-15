function minNumber (input){
    let n = Number(input.shift());
    let count = 0;
    let min = 999999999999;

    while (count < n){
        let num = Number(input.shift());
        count++;
        if(num < min){
            min = num
        }
    }
    console.log(min);
}

minNumber(['2','100','99']);
