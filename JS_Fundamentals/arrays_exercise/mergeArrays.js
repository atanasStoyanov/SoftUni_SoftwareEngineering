function solve(firstArr, secondArr) {
    let outputArr = [];

    for (let i = 0; i < firstArr.length; i++) {
        let firstArrElement = firstArr[i];
        let secondArrElement = secondArr[i];
        
        if (i % 2 === 0) {
            outputArr.push(Number(firstArrElement) + Number(secondArrElement));
        } else {
            outputArr.push(`${firstArrElement}${secondArrElement}`);
        }

    }

    console.log(outputArr.join(' - '));
}

solve(['5', '15', '23', '56', '35'], ['17', '22', '87', '36', '11']);