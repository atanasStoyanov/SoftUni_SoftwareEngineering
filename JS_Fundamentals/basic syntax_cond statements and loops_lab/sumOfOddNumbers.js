function solve(n) {
    let sum = 0;
    let counter = 0;

    for (let i = 1; i < 1000; i++) {

        if (i % 2 !== 0) {
            console.log(i);
            counter++;
            sum += i;
        }

        if (counter === n) {
            break;
        }
    }

    console.log(`Sum: ${sum}`);

}
solve(3);