function solve(arr) {
    let rotations = Number(arr[arr.length - 1]);
    let resultArr = arr.slice(0, arr.length - 1);

    rotations = rotations % resultArr.length;

    for (let i = 0; i < rotations; i++) {
        let element = resultArr.pop()
        
        resultArr.unshift(element);
        
    }
    
    return resultArr.join(' ');
}

console.log(solve(['Banana', 
'Orange', 
'Coconut', 
'Apple', 
'15']
));
