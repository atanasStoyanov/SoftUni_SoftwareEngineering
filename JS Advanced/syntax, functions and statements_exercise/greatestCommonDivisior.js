function solve (firstNum, secondNum) {
    
    if (!secondNum) {
        return firstNum;
    }

    return solve(secondNum, firstNum % secondNum);
}

console.log(solve(2154, 458));
