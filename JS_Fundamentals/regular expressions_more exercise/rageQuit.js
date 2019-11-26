function solve(arr) {
    let text = arr[0];
    let pattern = /[^0-9]+[0-9]+/g;

    let rageMsg = text.match(pattern)
        .reduce((agr, msg) => {
            let stringPattern = /[^0-9]+/g;
            let numPattern = /[0-9]+/g;

            let str = msg.match(stringPattern).join('').toUpperCase();
            let num = msg.match(numPattern).join('');

            agr.push(str.repeat(num));

            return agr;
        }, []);

    let uniqueSymbols = rageMsg
        .join('')
        .split('')
        .filter((a, i, self) => self.indexOf(a) === i);

    console.log(`Unique symbols used: ${uniqueSymbols.length}`);

    console.log(rageMsg.join(''));

}

solve(['aSd2&5s@10']);