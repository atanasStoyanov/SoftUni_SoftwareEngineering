function primeNonPrimeSum(input) {
    let command = input.shift()
    let primeSum = 0;
    let nonPrimeSum = 0;
    

    while(command != 'stop'){
        let num = Number(command);
        if (num < 0){
            console.log('Number is negative.');
            command = input.shift();
            continue;
        }
        let isPrime = true;
        if (num == 1){
            isPrime = false;
        }else {
            for (let i = 2; i < num; i++) {
                if(num % i == 0){
                    isPrime = false;
                    break;
                }
            }
        }
        if (isPrime){
            primeSum += num;
        }else{
            nonPrimeSum += num;
        }
        command = input.shift();
    }
    console.log(`Sum of all prime numbers is: ${primeSum}`);
    console.log(`Sum of all non prime numbers is: ${nonPrimeSum}`);
}

primeNonPrimeSum([30,83,33,-1,20,'stop'])