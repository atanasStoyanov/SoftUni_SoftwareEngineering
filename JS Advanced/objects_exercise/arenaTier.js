function solve(arr) {
    function addGladiator(obj, name, tech, skill) {
        obj.hasOwnProperty(name) ? obj = obj : obj[name] = {};
        return obj;
    }

    function addOrUpdateTechnique(obj, name, tech, skill) {
        obj[name].hasOwnProperty(tech) ? obj[name][tech] = Math.max(Number(skill), obj[name][tech]) : obj[name][tech] = Number(skill);
        return obj;
    }

    function duel(obj, firstGladiator, secondGladiator) {
        let loser = '';
        calculateTotalSkill(obj, firstGladiator) - calculateTotalSkill(obj, secondGladiator) > 0 ? loser = secondGladiator : loser = firstGladiator;
        return loser;
    }

    function calculateTotalSkill(obj, name) {
        return Object.values(obj[name]).reduce((agr, skill) => agr += skill);
    }

    function checkIfBothGladiatorsExist(obj, firstName, secondName) {
        if (obj.hasOwnProperty(firstName) && obj.hasOwnProperty(secondName)) {
            return true;
        } else {
            return false;
        }
    }

    function threIsCommonTechnique(firstGladiatorTechniques, secondGladiatorTechniques) {
        let comparedTechniques = firstGladiatorTechniques.map(tech => secondGladiatorTechniques.includes(tech) ? tech = true : tech = false);
        return comparedTechniques.includes(true);
    }

    let lastCommand = arr.pop();

    let gladiatorPool = arr
        .reduce((agr, command) => {

            if (command.includes('->')) {
                addGladiator(agr, ...command.split(' -> '));
                addOrUpdateTechnique(agr, ...command.split(' -> '));
            } else {
                let [firstGladiator, secondGladiator] = command.split(' vs ');
                let gladiatorsExist = checkIfBothGladiatorsExist(agr, firstGladiator, secondGladiator);
                let hasCommonTechniques = gladiatorsExist === true ? threIsCommonTechnique(Object.keys(agr[firstGladiator]), Object.keys(agr[secondGladiator])) : false;

                if (gladiatorsExist && hasCommonTechniques) {
                    let loser = duel(agr, firstGladiator, secondGladiator);
                    delete agr[loser];
                }
            }
            return agr;
        }, {});

    let output = '';

    Object.keys(gladiatorPool)
        .sort((a, b) => calculateTotalSkill(gladiatorPool, b) - calculateTotalSkill(gladiatorPool, a) || a.localeCompare(b))
        .map(gladiator => {
            output += `${gladiator}: ${calculateTotalSkill(gladiatorPool, gladiator)} skill\n`;

            Object.keys(gladiatorPool[gladiator])
                .sort((a, b) => gladiatorPool[gladiator][b] - gladiatorPool[gladiator][a] || a.localeCompare(b))
                .map(tech => output += `- ${tech} <!> ${gladiatorPool[gladiator][tech]}\n`);
        });

    return output;
}

console.log(solve([
    "Pesho -> BattleCry -> 400",
    "Gosho -> PowerPunch -> 300",
    "Stamat -> Duck -> 200",
    "Stamat -> Tiger -> 250",
    "Ave Cesar"
]));

