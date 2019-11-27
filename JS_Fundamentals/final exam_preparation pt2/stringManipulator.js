function solve(arr) {
    let str = arr.shift();

    for (const command of arr) {
        let commandSplit = command.split(' ');
        let action = commandSplit[0];

        if (action === 'Change') {
            let char = commandSplit[1];
            let replacement = commandSplit[2];

            while (str.includes(char)) {
                str = str.replace(char, replacement);
            }

            console.log(str);
            
        } else if (action === 'Includes') {
            let strToIncldue = commandSplit[1];
            str.includes(strToIncldue) ? console.log('True') : console.log('False');

        } else if (action === 'End') {
            let strToEnd = commandSplit[1];
            str.endsWith(strToEnd) ? console.log('True') : console.log('False');

        } else if (action === 'Uppercase') {
            str = str.toUpperCase();
            console.log(str);

        } else if (action === 'FindIndex') {
            let char = commandSplit[1];
            console.log(str.indexOf(char));

        } else if (action === 'Cut') {
            let startIndex = Number(commandSplit[1]);
            let count = Number(commandSplit[2]);
            str = str.substr(startIndex, count);
            console.log(str);
        }
    }
}

solve([
    '//Th1s 1s my str1ng!//',
    'Change 1 i',
    'Includes string',
    'End my',
    'Uppercase',
    'FindIndex I',
    'Cut 5 5',
    'Done'
]);