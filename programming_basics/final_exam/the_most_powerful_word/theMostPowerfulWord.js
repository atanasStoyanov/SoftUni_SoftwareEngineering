function theMostPowerfulWord (input) {
    let longestWord = '';
    let longestWordSum = Number.MIN_SAFE_INTEGER;
    let command = input.shift();

    while (command !== 'End of words') {
        let currentWord = 0;

        for (let i = 0; i < command.length; i++) {
            let letter = command.charCodeAt(i);
            currentWord += letter;            
        }

        if (command[0] === 'A' || command[0] === 'E' || command[0] === 'I' || command[0] === 'O' || command[0] === 'U' || command[0] === 'Y' || command[0] === 'a' || command[0] === 'e' || command[0] === 'i' || command[0] === 'o' || command[0] === 'u' || command[0] === 'y') {
            currentWord *= command.length;
        } else {
            currentWord /= command.length;
        }

        if (currentWord > longestWordSum) {
            longestWord = command;
            longestWordSum = currentWord;
        }

        command = input.shift();
    }

    console.log(`The most powerful word is ${longestWord} - ${longestWordSum}`);
}

theMostPowerfulWord(['But', 'Some', 'People', 'Say', "It's", 'LOVE', 'End of words']);