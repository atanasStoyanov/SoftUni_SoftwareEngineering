function solve(arr) {
    let modifiedArr = [];
    let sumOriginalArr = 0;
    let sumModifiedArr = 0;

    for (let index = 0; index < arr.length; index++) {
        let currentNum = Number(arr[index]);
        sumOriginalArr += currentNum;

        if (currentNum % 2 === 0) {
            currentNum += index;
        } else {
            currentNum -= index;
        }

        modifiedArr.push(currentNum);
        sumModifiedArr += currentNum;
    }

    console.log(modifiedArr);
    console.log(sumOriginalArr);
    console.log(sumModifiedArr);
}

solve([5, 15, 23, 56, 35]);