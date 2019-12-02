function solve(arr) {
    let [firstPart, secondPart, thirdPart] = arr[0].split('|');
    let thirdPartArr = thirdPart.split(' ');

    let lettersPattern = /([#\$%\*&])(?<letters>[A-Z]+)\1/g;
    let asciiPattern = /(?<asciiCode>[0-9]{2}):(?<length>[0-9]{2})/g;

    let lettersMatch = lettersPattern.exec(firstPart);
    let { letters } = lettersMatch.groups;
    let lettersArr = letters.split('');

    let asciiMatches = secondPart.match(asciiPattern);

    let words = [];

    for (const asciiChar of asciiMatches) {
        let [capLetterCode, addLength] = asciiChar.split(':')
        addLength = Number(addLength);
        let capLetter = String.fromCharCode(Number(capLetterCode));

        if (lettersArr.includes(capLetter)) {
            for (const word of thirdPartArr) {

                if (word.startsWith(capLetter) && word.length === addLength + 1) {
                    words.push(word);
                    break;
                }
            }
        }
    }

    words = words
        .filter((a, index, self) => self.indexOf(a) === index)
        .sort(function (a, b) {
            return lettersArr.indexOf(a[0]) - lettersArr.indexOf(b[0]);
        });
        
    console.log(words.join('\n'));
}

solve([
    'Urgent"Message.TO$#POAML#|readData79:05:79:0!2reme80:03--23:11{79:05}tak{65:11ar}!77:!23--)77:05ACCSS76:05ad|Remedy Por Ostream :Istream Post sOffices Office Of Ankh-Morpork MR.LIPWIG Mister Lipwig'
])