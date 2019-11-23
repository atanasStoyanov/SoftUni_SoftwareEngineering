function solve(arr) {
    let demons = arr[0].split(/[, ]+/g).sort((a, b) => a.localeCompare(b));
    const manipulatorsObj = {
        '*': (num) => num * 2,
        '/': (num) => num / 2
    }

    for (const demon of demons) {
        const healthPattern = /[^\d\+\-\*\/\.]/g;
        const baseDamagePattern = /[\-|\+]?\d+(\.\d+)?/g;
        const manipulatorsPattern = /\*|\//g;

        let health = demon.match(healthPattern)
            .reduce((a, b) => a + b.charCodeAt(), 0);


        let damageMatch = demon.match(baseDamagePattern);

        let damage = 0;

        if (damageMatch) {
            damage = damageMatch
                .map(Number)
                .reduce((a, b) => a + b, 0);
        }


        let manipulators = demon.match(manipulatorsPattern);

        if (manipulators) {
            manipulators.map(manip => damage = manipulatorsObj[manip](damage));
        }

        console.log(`${demon} - ${health} health, ${damage.toFixed(2)} damage`);

    }

}

solve([
    'M3ph-0.5s-0.5t0.0**'
])