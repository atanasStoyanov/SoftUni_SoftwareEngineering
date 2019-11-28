function solve(arr) {
    let username = arr.shift();

    for (const command of arr) {
        let commandSplit = command.split(' ');
        let action = commandSplit[0];

        if (action === 'Case') {
            let letterCase = commandSplit[1];

            if (letterCase === 'lower') {
                username = username.toLowerCase();
            } else {
                username = username.toUpperCase();
            }

            console.log(username);

        } else if (action === 'Reverse') {
            let start = Number(commandSplit[1]);
            let end = Number(commandSplit[2]);

            if ((start >= 0 && start < username.length) && (end >= 0 && end < username.length)) {
                console.log(username
                    .substring(start, end + 1)
                    .split('')
                    .reverse()
                    .join(''));
            }

        } else if (action === 'Cut') {
            let substring = commandSplit[1];

            if (username.includes(substring)) {
                username = username.replace(substring, '');
                console.log(username);
            } else {
                console.log(`The word ${username} doesn't contain ${substring}.`)
            }

        } else if (action === 'Replace') {
            let char = commandSplit[1];

            while (username.includes(char)) {
                username = username.replace(char, '*');
            }

            console.log(username);

        } else if (action === 'Check') {
            let char = commandSplit[1];
            username.includes(char) ? console.log('Valid') : console.log(`Your username must contain ${char}.`);
        }
    }
}

solve([
    'ThisIsMyString',
    'Reverse 1 4',
    'Replace i',
    'Cut My',
    'Sign up'
]);