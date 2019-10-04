function solve(arr) {
    let topIntegersArr = [];

    for (let i = 0; i < arr.length -1; i++) {
        let element = Number(arr[i]);
        let isBigger = true;

        for (let j = i + 1; j < arr.length; j++) {
            let nextElement = Number(arr[j]);  
            if (element <= nextElement) {
                isBigger = false;
            }          
        }
        
        if (isBigger) {
            topIntegersArr.push(element)
        }

    }

    topIntegersArr.push(arr.pop());

    console.log(topIntegersArr.join(' '));
}

solve([1, 4, 3, 2])