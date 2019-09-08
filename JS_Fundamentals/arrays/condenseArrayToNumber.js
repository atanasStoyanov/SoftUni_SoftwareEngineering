function condenseArrayToNumber (arr) {
    let condensedArr = [];

    while (arr.length > 1){
        for (let i = 0; i < arr.length - 1; i++) {
           condensedArr.push(arr[i] + arr[i + 1]);
        }
        arr = condensedArr.slice();
        condensedArr = [];
    }
    console.log(arr[0]);
}
condenseArrayToNumber([1])