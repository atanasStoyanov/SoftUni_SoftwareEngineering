function solve(firstArr, secondArr) {
    let equalArrays = true;
    let sum = 0;

    for (let index = 0; index < firstArr.length; index++) {
        let firstArrElement = Number(firstArr[index]);
        let secondArrElement = Number(secondArr[index]);
        
        if (firstArrElement === secondArrElement) {
            sum += firstArrElement;
        } else {
            equalArrays = false;
            console.log(`Arrays are not identical. Found difference at ${index} index`);
            break;
        }
    }

    if (equalArrays) {
        console.log(`Arrays are identical. Sum: ${sum}`);
    }
}

solve(['10','20','30'], ['10','20','30']);