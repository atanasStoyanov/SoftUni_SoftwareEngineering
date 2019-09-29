function solve(num) {
    let isPrime = true;

    for (let index = 2; index < num; index++) {

        if (num % index === 0) {
            isPrime = false;
        }
    }

    if (isPrime) {
        console.log('true');
    } else {
        console.log('false');
    }
}

solve(81);