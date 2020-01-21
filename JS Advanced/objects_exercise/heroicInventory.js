function solve(arr) {

    function prepareItems(str) {
        return str === undefined ? str = [] : str = str.split(', ');
    }

    return JSON.stringify(arr.reduce((agr, line) => {
        let [name, level, itemsStr] = line.split(' / ');
        level = Number(level);
        let items = prepareItems(itemsStr);

        agr.push({
            name,
            level,
            items
        });

        return agr;
    }, []));

}

console.log(solve([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]));
