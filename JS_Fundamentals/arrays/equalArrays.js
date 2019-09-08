function equalArrays(firstArr, secondArr) {
    let arraysAreEqual = true;
    let sumFirstArr = 0;
    let index = 0;

    for (let i = 0; i < firstArr.length; i++) {
        let elementFirstArr = Number(firstArr[i]);
        let elementSecondArr = Number(secondArr[i]);
        
        if (elementFirstArr !== elementSecondArr){
            arraysAreEqual = false;
            index = i;
            break;
        } else {
            sumFirstArr += elementFirstArr;
        }        
    }
    
    if (arraysAreEqual){
        console.log(`Arrays are identical. Sum: ${sumFirstArr}`);
    } else {
        console.log(`Arrays are not identical. Found difference at ${index} index`);
    }
}
equalArrays(['1'], ['10'])