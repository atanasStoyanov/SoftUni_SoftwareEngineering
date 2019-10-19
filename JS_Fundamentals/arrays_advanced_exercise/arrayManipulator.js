function solve(arr, commands) {

    let command = commands.shift();

        while (command !== 'print') {
            command = command.split(' ');
            let action = command.shift();
            switch (action) {
                case 'add':
                    let addElementAtIndex = Number(command.shift());
                    let elementToAdd = Number(command.shift());
                    arr.splice(addElementAtIndex, 0, elementToAdd);
                    break;
                case 'addMany':
                    let addAtIndex = Number(command.shift());
                    command = command.map(a => Number(a));
                    arr.splice(addAtIndex, 0, ...command);
                    break;
                case 'contains':
                    let elementToContain = Number(command.shift());
                    console.log(arr.indexOf(elementToContain));
                    break;
                case 'remove':
                    let removeElementAtIndex = Number(command.shift());
                    arr.splice(removeElementAtIndex, 1);
                    break;
                case 'shift':
                    let indexesToShift = Number(command.shift());
                    while (indexesToShift > 0) {
                        arr.push(arr.shift());
                        indexesToShift--
                    }
                    break;
                case 'sumPairs':
                    arr = arr
                        .map((e, i, array) => (i < array.length - 1) ? (array[i] += array[i + 1]) : (array[i] = array[i]))
                        .filter((e, i) => i % 2 === 0);
                    break;
            }
            command = commands.shift();
        }
        console.log(`[ ${arr.join(', ')} ]`);
}
    solve([1, 2, 4, 5, 6, 7],
        ['add 1 8', 'contains 1', 'contains 3', 'print']);