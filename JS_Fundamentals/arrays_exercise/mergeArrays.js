function mergeArrays (firstArr, secondArr) {
    let newArr = [];

    for (let i = 0; i < firstArr.length; i++) {
        let elementFirstArr = firstArr[i];
        let elementSecondArr = secondArr[i];
        let newElement = undefined;

        if (i % 2 === 0){
            newElement = Number(elementFirstArr) + Number(elementSecondArr);
        } else {
            newElement = `${elementFirstArr}${elementSecondArr}`
        }

        newArr.push(newElement);
    }
    
    console.log(newArr.join(' - '));
}
mergeArrays(["13", "12312", "5", "77", "4"], ["22", "333", "5", "122", "44"])