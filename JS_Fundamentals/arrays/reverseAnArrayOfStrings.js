function reversAnArrayOfStrings (arr) {
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        lastElement = arr[arr.length - 1 - i]
        newArr.push(lastElement);
    }
    console.log(newArr.join(' '));
}
reversAnArrayOfStrings(['33', '123', '0', 'dd'])