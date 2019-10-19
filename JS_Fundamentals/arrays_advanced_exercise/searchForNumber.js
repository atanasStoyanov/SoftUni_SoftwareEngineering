function solve(arr, actionsArr) {
    let elToTake = Number(actionsArr.shift());
    let elToDelete = Number(actionsArr.shift());
    let searchedNum = Number(actionsArr.shift());
    let counter = 0;

    arr = arr.slice(0, elToTake);
    
    arr.splice(0, elToDelete);

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] === searchedNum) {
            counter++;
        }
    }

    console.log(`Number ${searchedNum} occurs ${counter} times.`);
    
}

solve([5, 2, 3, 4, 1, 6],
    [5, 2, 3]);