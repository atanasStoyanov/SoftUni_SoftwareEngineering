function mergeArrays(arr1, arr2) {
    let arr3 = [];
    let tempResult;
    for (i = 0; i <= arr1.length - 1; i++) {
        if (i % 2 == 0) {
            tempResult = Number(arr1[i]) + Number(arr2[i]);
            arr3.push(tempResult);
            tempResult = 0;
        } else {
            tempResult = arr1[i] + arr2[i];
            arr3.push(Number(tempResult));
            tempResult = 0;
        }
    }
    console.log(arr3.join(" - "));
}