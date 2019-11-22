function solve(arr) {
    let planets = {
        'A': [],
        'D': []
    };

    for (let message of arr) {
        let starPattern = /[star]/gmi;
        let messagePattern = /@(?<name>[A-za-z]+)(?:[^@\-!:>]+)?:(?<population>[\d]+)(?:[^@\-!:>]+)?!(?<attack>[AD])!(?:[^@\-!:>]+)?->(?<count>[\d]+)/g;
        let starCounter = message.match(starPattern) ? message.match(starPattern).length : 0;
        let decryptedMsg = message
            .split('')
            .map(a => String.fromCharCode(a.charCodeAt() - starCounter))
            .join('');

        let matches = messagePattern.exec(decryptedMsg);
        if (matches) {
            let { name, population, attack, count } = matches.groups;

            planets[attack].push(name);
        }

    }

    console.log(`Attacked planets: ${planets.A.length}`);

    if (planets.A.length > 0) {
        planets.A
            .sort((a, b) => a.localeCompare(b))
            .forEach(a => console.log(`-> ${a}`));
    }

    console.log(`Destroyed planets: ${planets.D.length}`);

    if (planets.D.length > 0) {
        planets.D
            .sort((a, b) => a.localeCompare(b))
            .forEach(a => console.log(`-> ${a}`));
    }

}

solve([
    "3",
    "tt(''DGsvywgerx>6444444444%H%1B9444",
    "GQhrr|A977777(H(TTTT",
    "EHfsytsnhf?8555&I&2C9555SR",

]);