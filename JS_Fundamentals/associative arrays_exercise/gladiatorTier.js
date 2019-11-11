function solve(arr) {
    let gladiatorsPool = {};

    for (let i = 0; i < arr.length; i++) {
        let token = arr[i];

        if (token.includes(' -> ')) {
            let [gladiator, technique, skill] = token.split(' -> ');
            skill = Number(skill);

            if (!gladiatorsPool.hasOwnProperty(gladiator)) {
                gladiatorsPool[gladiator] = { [technique]: skill };
            } else {

                if (gladiatorsPool[gladiator].hasOwnProperty(technique)) {
                    gladiatorsPool[gladiator][technique] = Math.max(gladiatorsPool[gladiator][technique], skill);
                } else {
                    gladiatorsPool[gladiator][technique] = skill;
                }
            }

        } else if (token.includes(' vs ')) {
            let [firstGlad, secondGlad] = token.split(' vs ');

            if (gladiatorsPool.hasOwnProperty(firstGlad) && gladiatorsPool.hasOwnProperty(secondGlad)) {
                let firstGladTech = Object.keys(gladiatorsPool[firstGlad]);
                let secondGladTech = Object.keys(gladiatorsPool[secondGlad]);
                let thereAreCommonTech = false;

                for (const tech of firstGlad) {
                    if (secondGlad.includes(tech)) {
                        thereAreCommonTech = true;
                        break;
                    }
                }
                let firstGladTotalSkill = Object.values(gladiatorsPool[firstGlad]).reduce((a, b) => a + b, 0);
                let secondGladTotalSkill = Object.values(gladiatorsPool[secondGlad]).reduce((a, b) => a + b, 0);

                if (firstGladTotalSkill > secondGladTotalSkill) {
                    delete gladiatorsPool[secondGlad];
                } else {
                    delete gladiatorsPool[firstGlad];
                }

            }
        } else {
            let sortedGladiators = Object.keys(gladiatorsPool)
                .sort((firstGlad, nextGlad) => {
                    let firstGladTotalSkill = Object.values(gladiatorsPool[firstGlad])
                        .reduce((a, b) => a + b, 0);
                    let secondGladTotalSkill = Object.values(gladiatorsPool[nextGlad])
                        .reduce((a, b) => a + b, 0);

                    return secondGladTotalSkill - firstGladTotalSkill;
                })
                .map(glad => {
                    let totalSkill = Object.values(gladiatorsPool[glad]).reduce((a, b) => a + b, 0);
                    console.log(`${glad}: ${totalSkill} skill`);
                    let techniques = Object.keys(gladiatorsPool[glad])
                        .sort((a, b) => a.localeCompare(b))
                        .sort((a, b) => gladiatorsPool[glad][b] - gladiatorsPool[glad][a])
                        .map(tech => console.log(`- ${tech} <!> ${gladiatorsPool[glad][tech]}`));
                });

        }
    }
}

solve([
    'Pesho -> Duck -> 400',
    'Julius -> Shield -> 150',
    'Gladius -> Heal -> 200',
    'Gladius -> Support -> 250',
    'Gladius -> Shield -> 250',
    'Peter vs Gladius',
    'Gladius vs Julius',
    'Gladius vs Maximilian',
    'Ave Cesar'
]);