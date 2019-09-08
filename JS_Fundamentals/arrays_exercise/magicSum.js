function magicSum (arr, num) {

    for (let i = 0; i < arr.length; i++) {
        let firstElement = Number(arr[i]);

        for (let j = i + 1; j < arr.length; j++) {
            let output = [];
            let secondElement = Number(arr[j]);
            if (firstElement + secondElement === num){
                output.push(firstElement);
                output.push(secondElement);
                
                console.log(output.join(' '));
            }
        }
    }
}
magicSum([1, 2, 3, 4, 5, 6], 6)