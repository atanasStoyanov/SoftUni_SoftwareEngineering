function solve(arr) {
    let n = arr.shift();
    for (const password of arr) {
        let pattern = /(.+)>(?<nums>[0-9]{3})\|(?<lowerLet>[a-z]{3})\|(?<upperLet>[A-Z]{3})\|(?<allSymb>[^<>]{3})<\1/g;

        let match = pattern.exec(password);

        if (match) {
            let { nums, lowerLet, upperLet, allSymb } = match.groups;
            console.log(`Password: ${nums}${lowerLet}${upperLet}${allSymb}`);
        } else {
            console.log('Try another password!');
        }
    }
}

solve([
    '5',
    'aa>111|mqu|BAU|mqu<aa',
    '()>111!aaa!AAA!^&*<()',
    'o>088|abc|AAA|***<o',
    'asd>asd|asd|ASD|asd<asd',
    '*>088|zzzz|ZzZ|123<*',
]);