function solve(arr) {
    let firstStr = arr[0];
    let secondStr = arr[1];
    let word = arr[2].toUpperCase();
    let password = firstStr + secondStr;
    let letterIndex = 0;

    for (let i = 0; i < password.length; i++) {
        let currentLetter = password[i];

        if (currentLetter === 'a' || currentLetter === 'e' || currentLetter === 'i' || currentLetter === 'o' || currentLetter === 'u') {
            password = password.replace(currentLetter, word[letterIndex]);
            letterIndex++;
        }

        if (letterIndex > word.length - 1) {
            letterIndex = 0;
        }

    }

    password = password
        .split('')
        .reverse()
        .join('');

    console.log(`Your generated password is ${password}`);

}

solve([
    'easymoneyeazylife',
    'atleasttencharacters',
    'absolute'
]);