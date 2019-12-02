function solve(arr) {
    let text = arr.join('');
    let stringPattern = /[^0-9]+/g;
    let numPattern = /[0-9]+/g;

    let symbolsArr = text.match(stringPattern);
    let numsArr = text.match(numPattern);
    let rage = '';
    let uniqueSymbols = '';

    for (let i = 0; i < symbolsArr.length; i++) {
        let num = Number(numsArr[i]);
        let str = symbolsArr[i].toUpperCase();

        str
            .split('')
            .forEach(char => {
                if (!uniqueSymbols.includes(char) && num !== 0) {
                    uniqueSymbols += char;
                }
            });

        rage += str.repeat(num)
    }
    
    console.log(`Unique symbols used: ${uniqueSymbols.length}`);

    console.log(rage);
}

solve(['aSd2&5s@1']);