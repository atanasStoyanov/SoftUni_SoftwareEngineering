function solve(arr) {

    let result = 0;

    function intersect(firstArr, secondArr) {
        return firstArr
            .filter((element, index) => secondArr[index] === element)
            .length;
    }

    function equalNeighborsInArray(arr) {
        return arr
            .filter((element, index, self) => element === self[index + 1])
            .length;
    }

    for (let i = 0; i < arr.length - 1; i++) {
        result += intersect(arr[i], arr[i + 1]);
        result += equalNeighborsInArray(arr[i]);
    }

    result += equalNeighborsInArray(arr[arr.length - 1]);

    return result;

}

console.log(solve([
    ['2', '3', '4', '7', '0'],
    ['4', '0', '5', '3', '4'],
    ['2', '3', '5', '4', '2'],
    ['9', '8', '7', '5', '4']
]));
