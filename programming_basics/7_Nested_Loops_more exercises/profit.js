function profit(input) {
    let coins1 = Number(input.shift());
    let coins2 = Number(input.shift());
    let notes5 = Number(input.shift());
    let sum = Number(input.shift());

    for (let one = 0; one <= coins1; one++) {

        for (let two = 0; two <= coins2; two++) {

            for (let five = 0; five <= notes5; five++) {

                if ((one * 1 + two * 2 + five * 5) == sum) {
                    console.log(`${one} * 1 lv. + ${two} * 2 lv. + ${five} * 5 lv. = ${sum} lv.`);
                }
            } 
        }
    }
}
profit([5,3,1,7])