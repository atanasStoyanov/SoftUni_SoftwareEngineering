function maxNumber (arr) {
    let output = [];

    for (let i = 0; i < arr.length; i++) {
        let currentElement = Number(arr[i]);
        let isTopInteger = true;
        
        for (let j = i + 1; j < arr.length; j++) {
            if (currentElement <= arr[j]) {
                isTopInteger = false;
            }
        }
        if (isTopInteger){
            output.push(currentElement);
        }
    }
    console.log(output.join(' '));
}
maxNumber([1, 4, 3, 2])