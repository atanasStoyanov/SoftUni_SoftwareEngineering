function solve(arr) {
    let num = Number(arr.shift());

    for (const line of arr) {
        let validPattern = /(\*|@)(?<tag>[A-Z][a-z]{2,})\1: \[(?<letter1>[A-Za-z])\]\|\[(?<letter2>[A-Za-z])\]\|\[(?<letter3>[A-Za-z])\]\|$/g;

        let match = validPattern.exec(line);

        if (match) {
            let { tag, letter1, letter2, letter3 } = match.groups;
            console.log(`${tag}: ${letter1.charCodeAt()} ${letter2.charCodeAt()} ${letter3.charCodeAt()}`);

        } else {
            console.log('Valid message not found!');
        }


    }
}

solve([
    '3',
    '@Taggy@: [i]|[n]|[v]|[a]|[l]|[i]|[d]| this shouldn’t be valid',
    '*tAGged*: [i][i][i]|',
    'Should be invalid @Taggy@: [v]|[a]|[l]|[l]|[l]|'

]);