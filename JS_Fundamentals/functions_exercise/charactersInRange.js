function solve(firstChar, secondChar) {

    function printChars(a, b) {
        let printLine = '';

        for (let i = a.charCodeAt() + 1; i < b.charCodeAt(); i++) {
            printLine += `${String.fromCharCode(i)} `;
        }

        console.log(printLine);

    }

    if (firstChar.charCodeAt() <= secondChar.charCodeAt()) {
        printChars(firstChar, secondChar);
    } else {
        printChars(secondChar, firstChar);
    }

}

solve('C', '#');