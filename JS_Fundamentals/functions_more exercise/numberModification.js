function solve(num) {
    num = String(num).split('');
    function calculateAvgSum(arrNum) {
        let sum = 0;
        for (let i = 0; i < arrNum.length; i++) {
            let digit = Number(arrNum[i]);
            sum += digit;
        }

        return sum / arrNum.length;
    }

    while(calculateAvgSum(num) < 5) {
        num.push('9');
    }

    console.log(num.join(''));
}

solve(5835);