function minNumber (input) {
    let n = Number(input.shift());
    let count = 0;
    let min = Number.MAX_SAFE_INTEGER;

    while (count < n) {
        let num = Number(input.shift());

        if (num < min) {
            min = num;
        }

        count++;
    }

    console.log(min);
}

minNumber(['2','100','99']);
