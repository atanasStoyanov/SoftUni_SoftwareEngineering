function solve(arr) {

    while (arr.length > 1) {
        let condensedArr = [];

        for (let i = 0; i < arr.length - 1; i++) {
            let firstNum = Number(arr[i]);
            let nextNum = Number(arr[i + 1]);
            
            condensedArr.push(firstNum + nextNum);
        }

        arr = condensedArr;
    }

    console.log(arr[0]);
    
}

solve([2,10,3]);