function addOrSubstract (arr) {
    let newArr = [];
    let sumOldArr = 0;
    let sumNewArr = 0;

    for (let i = 0; i < arr.length; i++) {
        let currentElement = Number(arr[i]);
        sumOldArr += currentElement;
        if (currentElement % 2 === 0){
            currentElement += i;
        } else {
            currentElement -= i;
        }
        sumNewArr += currentElement;
        newArr.push(currentElement);
    }
    console.log(newArr);
    console.log(sumOldArr);
    console.log(sumNewArr);
}

addOrSubstract([-5, 11, 3, 0, 2])