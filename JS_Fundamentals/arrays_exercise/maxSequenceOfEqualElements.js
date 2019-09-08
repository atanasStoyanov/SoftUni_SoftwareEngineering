function maxSequence (arr) {
    let longestSequence = [];

    for (let i = 0; i < arr.length; i++) {
        let currentElement = arr[i];
        let newArr = [];

        for (let j = i; j < arr.length; j++) {
            let nextElement = arr[j];

            if (nextElement === currentElement){
                newArr.push(currentElement);
            } else {
                break;
            }
        }
        
        if (newArr.length > longestSequence.length){
            longestSequence = newArr.slice();
        }
    }
    console.log(longestSequence.join(' '));
}
maxSequence([1, 1, 1, 2, 3, 1, 3, 3])