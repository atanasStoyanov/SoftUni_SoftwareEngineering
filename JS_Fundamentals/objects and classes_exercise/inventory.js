function solve(arr) {
    arr = arr
        .reduce((agr, prop) => {
            let [hero, level, items] = prop.split(' / ');
            items = items
                .split(', ')
                .sort((a, b) => a.localeCompare(b))
                .join(', ');

            agr.push({
                hero:hero,
                level: Number(level),
                items: items
            });
            return agr;
        },[])

        arr = arr
            .sort((a, b) => a.level - b.level)
            .map(a => {
                console.log(`Hero: ${a.hero}`);
                console.log(`level => ${a.level}`);
                console.log(`items => ${a.items}`);
            });

}

solve([
    "Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara"
    ]);