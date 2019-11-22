function solve(arr) {
    let participants = arr.slice(0, 1)[0].split(', ');
    let racers = {};

    let palces = {
        0: '1st place',
        1: '2nd place',
        2: '3rd place'
    }

    for (const line of arr.slice(1)) {
        let namePattern = /[A-Za-z]/g;
        let digitPattern = /\d/g;

        let nameMatch = line.match(namePattern);
        let digitMatch = line.match(digitPattern);

        if (nameMatch && digitMatch) {
            let racer = nameMatch.join('');

            if (participants.includes(racer)) {
                let distance = digitMatch
                .map(Number)
                .reduce((a, b) => a + b, 0);

                if (!racers.hasOwnProperty(racer)) {
                    racers[racer] = 0;
                }

                racers[racer] += distance;
            }
        }
    }

    Object.keys(racers)
        .sort((a, b) => racers[b] - racers[a])
        .slice(0, 3)
        .map((a, index) => console.log(`${palces[index]}: ${a}`))    
}

solve([
    "George, Peter, Bill, Tom",
    "G4e@55or%6g6!68e!!@",
    "R1@!3a$y4456@",
    "B5@i@#123ll",
    "G@e54o$r6ge#",
    "7P%et^#e5346r",
    "T$o553m&6",
    "end of race",

]);