function solve(str) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'

    function calculate(numString) {
        numString = numString.split('');
        let frontLetter = numString.shift();
        let backLetter = numString.pop();
        let num = Number(numString.join(''));
        let frontLetterPosition = alphabet.indexOf(frontLetter.toLowerCase()) + 1;
        let backLetterPosition = alphabet.indexOf(backLetter.toLowerCase()) + 1;

        if (frontLetter === frontLetter.toUpperCase()) {
            num /= frontLetterPosition;
        } else {
            num *= frontLetterPosition;
        }

        if (backLetter === backLetter.toUpperCase()) {
            num -= backLetterPosition;
        } else {
            num += backLetterPosition;
        }

        return num;
    }

    console.log(
        str
            .split(/\s+/)
            .map(a => calculate(a))
            .reduce((a, b) => a + b, 0)
            .toFixed(2));

}

solve('P34562Z q2576f   H456z');
