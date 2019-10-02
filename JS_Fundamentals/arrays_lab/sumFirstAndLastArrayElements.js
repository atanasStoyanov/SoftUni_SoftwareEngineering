function solve(arr) {
    let firstElement = Number(arr.shift());
    let lastElement = Number(arr.pop());

    console.log(firstElement + lastElement);
}

solve(['20', '30', '40']);