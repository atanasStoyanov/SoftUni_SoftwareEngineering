function solve(inputArr) {
    let actionsMap = {
        'add': (arr, el) => arr.push(el),
        'remove': (arr, el) => arr.pop(el)
    }

    let resultArr = inputArr.reduce((agr, command, i) => {
            actionsMap[command](agr, i + 1);
            return agr;
        },[]);

    return resultArr.length === 0 ? 'Empty' : resultArr.join('\n');
}

console.log(solve(['add', 'add', 'remove', 'add', 'add']));
