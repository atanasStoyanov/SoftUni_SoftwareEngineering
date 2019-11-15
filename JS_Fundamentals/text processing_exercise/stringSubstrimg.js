function solve(givenWord, text) {
    let wordIsFound = false;
    text = text.split(' ');

    for (const word of text) {
        if (word.toLowerCase() === givenWord.toLowerCase()) {
            console.log(givenWord);
            wordIsFound = true;
            break;
        }
    }

    if (wordIsFound === false) {
        console.log(`${givenWord} not found!`);
    }

}

solve(
    'javascript',
    'JavaScript is the best programming language'

);