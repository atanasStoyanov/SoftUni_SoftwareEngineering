function solve(pointsArr) {
    let x1 = Number(pointsArr[0]);
    let y1 = Number(pointsArr[1]);
    let x2 = Number(pointsArr[2]);
    let y2 = Number(pointsArr[3]);

    function calculateHypot(x, y) {
        let hypothenuse = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
        return hypothenuse;
    }
    let output = '';

    let firstToStartIsValid = Number.isInteger(calculateHypot(x1, y1));

    if (firstToStartIsValid) {
        output += `{${x1}, ${y1}} to {0, 0} is valid\n`;
    } else {
        output += `{${x1}, ${y1}} to {0, 0} is invalid\n`;
    }

    let secondToStartIsValid = Number.isInteger(calculateHypot(x2, y2));

    if (secondToStartIsValid) {
        output += `{${x2}, ${y2}} to {0, 0} is valid\n`
    } else {
        output += `{${x2}, ${y2}} to {0, 0} is invalid\n`
    }

    let x3 = Math.abs(x1 - x2);
    let y3 = Math.abs(y1 - y2);
    let firstToSecondIsValid = Number.isInteger(calculateHypot(x3, y3));

    if (firstToSecondIsValid) {
        output += `{${x1}, ${y1}} to {${x2}, ${y2}} is valid`;
    } else {
        output += `{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`;
    }

    return output;
}

console.log(solve([3, 0, 0, 4]));
