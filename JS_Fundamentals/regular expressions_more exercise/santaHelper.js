function solve(arr) {
    let key = Number(arr.shift());
    let listOfKids = {};

    for (const message of arr) {
        let decoded = message
            .split('')
            .map(char => String.fromCharCode(char.charCodeAt() - key))
            .join('');

        let pattern = /@(?<name>[A-Za-z]+)[^@\-!:>]+!(?<behaviour>[G|N])!/g;

        let matched = pattern.exec(decoded);

        if (matched) {
            let { name, behaviour } = matched.groups;

            listOfKids[name] = behaviour;
        }
    }

    Object.keys(listOfKids)
        .filter(kid => listOfKids[kid] === 'G')
        .map(kid => console.log(kid));
}

solve([
    "3",
    "N}eideidmk$'(mnyenmCNlpamnin$J$",
    "ddddkkkkmvkvmCFrqqru-nvevek$J$nmgievnge",
    "ppqmkkkmnolmnnCEhq/vkievk$Q$",
    "yyegiivoguCYdohqwlqh/kguimhk$J$",
    "end"
]);