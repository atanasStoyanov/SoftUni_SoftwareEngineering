function commmonElements (firstArr, secondArr) {
    
    for (let i = 0; i < firstArr.length; i++) {
        let currentElement = firstArr[i];
        if (secondArr.includes(currentElement)) {
            console.log(currentElement);
        }        
    }
}
commmonElements(["S", "o", "f", "t", "U", "n", "i", " "], ["s", "o", "c", "i", "a", "l"] )