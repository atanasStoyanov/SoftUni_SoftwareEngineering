function solve(arr) {
    let manager = {};

    for (const line of arr) {
        let lineSplit = line.split(':');

        if (lineSplit[0] === 'Add') {
            let user = lineSplit[1];
            let health = Number(lineSplit[2]);
            let energy = Number(lineSplit[3]);

            if (manager.hasOwnProperty(user)) {
                manager[user].health += health;
            } else {
                manager[user] = { health, energy }
            }

        } else if (lineSplit[0] === 'Attack') {
            let attacker = lineSplit[1];
            let defender = lineSplit[2];
            let damage = Number(lineSplit[3]);

            if (manager.hasOwnProperty(attacker) && manager.hasOwnProperty(defender)) {
                manager[defender].health -= damage;
                manager[attacker].energy -= 1;

                if (manager[defender].health <= 0) {
                    console.log(`${defender} was disqualified!`);
                    delete manager[defender];
                }

                if (manager[attacker].energy <= 0) {
                    console.log(`${attacker} was disqualified!`);
                    delete manager[attacker];
                }
            }

        } else if (lineSplit[0] === 'Delete') {
            let user = lineSplit[1];

            if (user === 'All') {
                manager = {};
            } else {
                delete manager[user];
            }
        } else {
            console.log(`People count: ${Object.keys(manager).length}`);

            Object.keys(manager)
                .sort()
                .sort((a, b) => manager[b].health - manager[a].health)
                .map(user => console.log(`${user} - ${manager[user].health} - ${manager[user].energy}`));
        }

    }

}

solve([
    'Add:Bonnie:3000:5',
    'Add:Johny:4000:10',
    'Delete:All',
    'Add:Bonnie:3333:3',
    'Results'

]);