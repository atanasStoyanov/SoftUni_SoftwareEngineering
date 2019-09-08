function arrayRotation (arr, rotations) {
    
    for (let i = 1; i <= rotations; i++) {
        let firstElement = arr.shift();
        arr.push(firstElement);        
    }
    console.log(arr.join(' '));
}
arrayRotation([2, 4, 15, 31], 5)
