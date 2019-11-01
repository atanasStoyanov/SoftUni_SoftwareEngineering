function solve(arr) {
    let message = arr.shift().split(' ');

    for (let i = 0; i < arr.length; i++) {
        let [action, ...params] = arr[i].split(' ');

        if (action === 'Delete') {
            let index = Number(params[0]);
            if (index >= 0 && index < message.length - 1) {
                message.splice(index + 1, 1);
            }
        } else if (action === 'Swap') {
            let firstWord = params[0];
            let secondWord = params[1];
            if (message.includes(firstWord) && message.includes(secondWord)) {
                let firstIndex = message.indexOf(firstWord);
                let secondIndex = message.indexOf(secondWord);
                let helper = message[firstIndex];
                message[firstIndex] = message[secondIndex];
                message[secondIndex] = helper;

            }
        } else if (action === 'Put') {
            let word = params[0];
            let index = Number(params[1]);

            if (index - 1 >= 0 && index - 1 <= message.length) {
                message.splice(index - 1, 0, word);
            }
        } else if (action === 'Sort') {
            message = message.sort((a, b) => b.localeCompare(a));
        } else if (action === 'Replace') {
            let firstWord = params[0];
            let secondWord = params[1];
            if (message.includes(secondWord)) {
                let index = message.indexOf(secondWord);
                message.splice(index, 1, firstWord)
            }
        } else if (action === 'Stop') {
            console.log(message.join(' '));
        }
    }

}

solve(['This the my quest! final',
    'Put is 2',
    'Swap final quest!',
    'Delete 2',
    'Stop'
]);