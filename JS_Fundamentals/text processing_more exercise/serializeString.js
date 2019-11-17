function solve(arr) {
    let str = arr[0];
    let uniqueChars = str
        .split('')
        .filter((el, index, self) => self.indexOf(el) === index);

    for (const char of uniqueChars) {
        let output = [];

        for (let i = 0; i < str.length; i++) {
            let currentChar = str[i];

            if (char === currentChar) {
                output.push(i);
            }
        }
        console.log(`${char}:${output.join('/')}`);

    }

}

solve(['abababa']);