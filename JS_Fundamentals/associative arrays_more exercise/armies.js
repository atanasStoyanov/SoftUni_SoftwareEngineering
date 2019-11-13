function solve(arr) {
    let armies = {};

    arr.map(token => {

        if (token.includes('arrives')) {
            let leader = token.split(' arrives').join('');
            armies[leader] = {};
        } else if (token.includes(':')) {
            let [leader, armyInfo] = token.split(': ');
            let [armyName, count] = armyInfo.split(', ');
            count = Number(count);

            if (armies.hasOwnProperty(leader)) {
                armies[leader][armyName] = count;
            }
        } else if (token.includes('+')) {
            let [armyName, count] = token.split(' + ');
            count = Number(count);

            Object.keys(armies)
                .map(l => {
                    if (Object.keys(armies[l]).includes(armyName)) {
                        armies[l][armyName] += count;
                    }
                });

        } else {
            let leader = token.split(' defeated').join('');

            delete armies[leader];
        }
    });

    Object.keys(armies)
        .sort((firstLeader, secondLeader) => {
            let totalArmyFirstLeader = Object.values(armies[firstLeader])
                .reduce((a, b) => a + b, 0);
            let totalArmySecondLeader = Object.values(armies[secondLeader])
                .reduce((a, b) => a + b, 0);

            return totalArmySecondLeader - totalArmyFirstLeader;
        })
        .map(leader => {
            let totalArmy = Object.values(armies[leader])
                .reduce((a, b) => a + b, 0);

            console.log(`${leader}: ${totalArmy}`);

            Object.keys(armies[leader])
                .sort((a, b) => armies[leader][b] - armies[leader][a])
                .map(arm => console.log(`>>> ${arm} - ${armies[leader][arm]}`));
        })

}

solve([
    'Rick Burr arrives',
    'Fergus: Wexamp, 30245',
    'Rick Burr: Juard, 50000',
    'Findlay arrives',
    'Findlay: Britox, 34540',
    'Wexamp + 6000', 'Juard + 1350',
    'Britox + 4500',
    'Porter arrives',
    'Porter: Legion, 55000',
    'Legion + 302',
    'Rick Burr defeated',
    'Porter: Retix, 3205'
]);