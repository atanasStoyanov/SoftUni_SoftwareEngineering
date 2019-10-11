function findTheSmallestNum(firstNum, secondNum, thirdNum) {
    let smallestNum = 0;

    if (firstNum <= secondNum && firstNum <= thirdNum) {
        smallestNum = firstNum;
    } else if (secondNum < firstNum && secondNum <= thirdNum) {
        smallestNum = secondNum;
    } else if (thirdNum < firstNum && thirdNum < secondNum) {
        smallestNum = thirdNum;
    }

    console.log(smallestNum);
}

findTheSmallestNum(600, 342, 123);