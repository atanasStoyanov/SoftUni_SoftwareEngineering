function solve(inputArr) {
    let arr = inputArr.shift().split(' ').map(Number);

    let add = (num) => arr.push(num);
    let removeNum = (num) => arr = arr.filter(el => el != num);
    let removeAtIndex = (i) => arr.splice(i, 1);
    let insert = (num, i) => arr.splice(i, 0, num);

    for (let i = 0; i < inputArr.length; i++) {
        let command = inputArr[i].split(' ');

        if (command[0] === 'Add') {
            add(Number(command[1]));
        } else if (command[0] === 'Remove') {
            removeNum(Number(command[1]));
        } else if (command[0] === 'RemoveAt') {
            removeAtIndex(Number(command[1]));
        } else {
            insert(Number(command[1]), Number(command[2]));
        }
    }

    console.log(arr.join(' '));
}

solve(['4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3']);