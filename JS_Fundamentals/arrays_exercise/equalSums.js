function equalSums (arr) {
    let elementExists = false;
    let elementIndex = 0;

    for (let i = 0; i < arr.length; i++) {
        let sumOfTheRightElements = 0;
        let sumOfTheLeftElements = 0;

        for (let j = i + 1; j < arr.length; j++) {
            sumOfTheRightElements += arr[j];            
        }

        for (let m = i - 1; m >= 0; m--) {
            sumOfTheLeftElements += arr[m];
        }   

        if (sumOfTheLeftElements === sumOfTheRightElements){
            elementExists = true;
            elementIndex = i;
            break;
        }  
    }
    
    if (elementExists){
        console.log(elementIndex);
    } else {
        console.log('no');
    }
}
equalSums([1, 2, 3])