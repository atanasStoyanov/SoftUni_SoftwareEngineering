function solve(firstArr, secondArr) {
    for (let i = 0; i < firstArr.length; i++) {
        let firstArrElement = firstArr[i];

        if (secondArr.includes(firstArrElement)) {
            console.log(firstArrElement);
        }

    }
}

solve(['Hey', 'hello', 2, 4, 'Peter', 'e'], ['Petar', 10, 'hey', 4, 'hello', '2']);